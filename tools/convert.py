"""One-off converter: the approved prototype templates -> TSX components."""
import re,json,sys
SRC='/tmp/claude-0/sitework/new.html'
s=open(SRC).read()
def tpl(name):
    i=s.index(f'id="{name}"'); i=s.index('>',i)+1; j=s.index('</template>',i); return s[i:j]
SVG_ATTRS={'stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','fill-opacity':'fillOpacity','stop-color':'stopColor','stop-opacity':'stopOpacity','fill-rule':'fillRule','clip-rule':'clipRule','stroke-opacity':'strokeOpacity','stroke-dasharray':'strokeDasharray','stroke-dashoffset':'strokeDashoffset','class':'className','for':'htmlFor','tabindex':'tabIndex','preserveAspectRatio':'preserveAspectRatio'}
VOID={'img','br','hr','input'}
def camel(p):
    if p.startswith('--'): return p
    p=re.sub(r'^-webkit-','Webkit-',p); p=re.sub(r'^-moz-','Moz-',p)
    return re.sub(r'-([a-z])',lambda m:m.group(1).upper(),p)
def expr(e): return e.strip()
def style_obj(v):
    parts=[x for x in re.split(r';(?![^()]*\))',v) if x.strip()]
    out=[]
    for p in parts:
        k,_,val=p.partition(':'); k=k.strip(); val=val.strip()
        if '{{' in val:
            tpl_=re.sub(r'\{\{([^}]+)\}\}',lambda m:'${'+expr(m.group(1))+'}',val); vv='`'+tpl_+'`'
        else: vv=json.dumps(val)
        kk=camel(k); kk=kk if re.match(r'^[A-Za-z_$][\w$]*$',kk) else json.dumps(kk)
        out.append(f'{kk}: {vv}')
    return '{{ '+', '.join(out)+' }}'
def attr(name,val,tag):
    if val is None: return name
    jn=SVG_ATTRS.get(name,name)
    if name=='onClick' or name.startswith('hint-') or name in('list','as','value') and tag.startswith('sc-'): return ''
    if name=='style': return f'style={style_obj(val)}'
    m=re.fullmatch(r'\{\{([^}]+)\}\}',val)
    if m: return f'{jn}={{{expr(m.group(1))}}}'
    if '{{' in val:
        return f'{jn}={{`'+re.sub(r'\{\{([^}]+)\}\}',lambda m:'${'+expr(m.group(1))+'}',val)+'`}'
    return f'{jn}={json.dumps(val,ensure_ascii=False)}'
TOK=re.compile(r'<(/?)([a-zA-Z][\w-]*)((?:\s+[^\s=>/]+(?:=(?:"[^"]*"|\'[^\']*\'))?)*)\s*(/?)>|([^<]+)',re.S)
def convert(t,ctx):
    out=[]; stack=[]
    for m in TOK.finditer(t):
        close,tag,attrs,selfc,text=m.groups()
        if text is not None:
            if text.strip()=='' : out.append(text if '\n' in text else ' '); continue
            tx=re.sub(r'\{\{([^}]+)\}\}',lambda mm:'\0'+expr(mm.group(1))+'\1',text)
            tx=tx.replace('{','&#123;').replace('}','&#125;').replace('\0','{').replace('\1','}')
            out.append(tx); continue
        if tag=='sc-for':
            if close:
                out.append('))}'); stack.pop(); continue
            a=dict(re.findall(r'([\w-]+)="([^"]*)"',attrs)); lst=expr(a['list'].strip('{}')); var=a['as']
            out.append('{'+lst+'.map(('+var+', _i) => (<Fragment key={_i}>')
            # closing handled via stack: need </Fragment>
            stack.append('for'); continue
        if tag=='sc-if':
            if close: out.append('</>)}'); stack.pop(); continue
            a=dict(re.findall(r'([\w-]+)="([^"]*)"',attrs)); out.append('{'+expr(a['value'].strip('{}'))+' && (<>'); stack.append('if'); continue
        if close: out.append(f'</{tag}>'); continue
        al=re.findall(r'([^\s=>/]+)(?:=("[^"]*"|\'[^\']*\'))?',attrs)
        parts=[]
        for n,v in al:
            vv=v[1:-1] if v else None
            r=attr(n,vv,tag)
            if r: parts.append(r)
        a_=(' '+' '.join(parts)) if parts else ''
        if tag in VOID and not selfc: selfc='/'
        out.append(f'<{tag}{a_}{"/" if selfc else ""}>')
    code=''.join(out)
    code=code.replace('))}','</Fragment>))}')  # close fragments
    return code
for name,fn in [('tplMain','home'),('tplBlog','blog')]:
    code=convert(tpl(name),{})
    open(f'tools/{fn}.jsx.txt','w').write(code)
    print(fn,len(code), code.count('<Fragment'), code.count('</Fragment>'))
