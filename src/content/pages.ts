import type { Lang } from './types';

export interface Section { h: string; p?: string[]; ul?: string[] }
export interface LegalPage { title: string; updated: string; intro: string; sections: Section[] }

export const UPDATED = '2026-11-12';

export const privacy: Record<Lang, LegalPage> = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: 12 November 2026',
    intro: 'Hmmly is a thinking-games app for children aged 3–5 and their parents.',
    sections: [
      { h: 'Short version', p: ['Hmmly has no ads, no analytics, no tracking and no social features. If a parent chooses to save progress or claim Jonu’s gift, the details they type are stored securely online (Google Firebase) so progress can come back on a new phone and the gift can be delivered. Nothing is sold or shared for advertising.'] },
      { h: 'What we collect, and why', p: ['Only when a parent chooses “save progress” or claims the gift:'], ul: [
        'Parent’s mobile number — verified with a one-time SMS code (Firebase Phone Authentication). Used to sign in, bring progress back, and contact you about the gift.',
        'Child’s nickname and age — used to say the name in stories and show progress. Please use a nickname, not a full name.',
        'Progress — which stories were played, ideas tried, time and optional 3-tap answers.',
        'Gift delivery details — recipient name, address and contact number, only if the parent fills in the gift page.',
        'Language and sound settings (kept on the phone).'] },
      { h: 'What we do not collect', p: ['We do not collect photos, voice recordings, location, contacts or advertising IDs. The child-facing part of the app asks for no personal information.'] },
      { h: 'Where it is stored and who can see it', p: ['Data is stored in Google Firebase (Cloud Firestore, Mumbai region) and the SMS code is sent through Firebase Authentication. Each parent’s data sits in a private space that only the signed-in parent can read. The Hmmly team uses the gift details only to deliver the gift and to answer your messages. We do not sell data or share it with advertisers.'] },
      { h: 'Messages you send us', p: ['If you use the contact form on this website, we store your name, email address and message so we can reply. We use it for nothing else.'] },
      { h: 'Keeping and deleting data', p: ['Data is kept while the account exists. A parent can erase everything stored online and on the phone at any time from the grown-ups area (Settings → Start over). You can also delete it from this website on the “Delete my data” page, or ask us to do it through the contact form.'] },
      { h: 'Children', p: ['The child-facing part of Hmmly asks for no personal information. Anything that needs typing (name, phone number, address) is placed behind a simple “grown-ups only” number check and is meant for a parent.'] },
      { h: 'Voice', p: ['Jonu’s voice uses recorded audio included in the app. If a line has no recording, the phone’s built-in text-to-speech may read it; this runs on your device.'] },
      { h: 'Changes', p: ['If this policy changes we will update the date above before releasing the change.'] },
    ],
  },
  bn: {
    title: 'গোপনীয়তা নীতি',
    updated: 'সর্বশেষ হালনাগাদ: ১২ নভেম্বর ২০২৬',
    intro: 'Hmmly হলো ৩–৫ বছরের শিশু ও তাদের অভিভাবকদের জন্য চিন্তা-খেলার অ্যাপ।',
    sections: [
      { h: 'সংক্ষেপে', p: ['Hmmly-তে কোনো বিজ্ঞাপন, অ্যানালিটিক্স, ট্র্যাকিং বা সোশ্যাল ফিচার নেই। অভিভাবক যদি অগ্রগতি সেভ করেন বা জনুর উপহার নিতে চান, তাহলে তাঁর দেওয়া তথ্য নিরাপদে অনলাইনে (Google Firebase) রাখা হয়, যাতে নতুন ফোনে অগ্রগতি ফিরে পাওয়া যায় এবং উপহার পাঠানো যায়। কিছুই বিক্রি করা হয় না, বিজ্ঞাপনের জন্যও কাউকে দেওয়া হয় না।'] },
      { h: 'আমরা কী সংগ্রহ করি এবং কেন', p: ['শুধু যখন অভিভাবক “অগ্রগতি সেভ” বেছে নেন বা উপহার নেন:'], ul: [
        'অভিভাবকের মোবাইল নম্বর — একবারের এসএমএস কোড দিয়ে যাচাই করা হয় (Firebase Phone Authentication)। সাইন-ইন, অগ্রগতি ফিরিয়ে আনা এবং উপহারের বিষয়ে যোগাযোগের জন্য।',
        'শিশুর ডাকনাম ও বয়স — গল্পে নাম বলা এবং অগ্রগতি দেখানোর জন্য। অনুগ্রহ করে পুরো নাম নয়, ডাকনাম দিন।',
        'অগ্রগতি — কোন গল্প খেলা হয়েছে, কোন বুদ্ধি চেষ্টা করা হয়েছে, সময় এবং ঐচ্ছিক ৩-ট্যাপ উত্তর।',
        'উপহার পাঠানোর তথ্য — প্রাপকের নাম, ঠিকানা ও যোগাযোগ নম্বর, শুধু অভিভাবক উপহারের পাতা পূরণ করলে।',
        'ভাষা ও শব্দের সেটিংস (ফোনেই থাকে)।'] },
      { h: 'যা আমরা সংগ্রহ করি না', p: ['আমরা ছবি, কণ্ঠস্বর রেকর্ডিং, অবস্থান, কন্টাক্ট বা বিজ্ঞাপন আইডি সংগ্রহ করি না। অ্যাপের শিশুদের অংশে কোনো ব্যক্তিগত তথ্য চাওয়া হয় না।'] },
      { h: 'কোথায় রাখা হয় এবং কে দেখতে পারে', p: ['তথ্য Google Firebase-এ (Cloud Firestore, মুম্বাই অঞ্চল) রাখা হয় এবং এসএমএস কোড Firebase Authentication দিয়ে পাঠানো হয়। প্রতিটি অভিভাবকের তথ্য একটি ব্যক্তিগত জায়গায় থাকে, যা শুধু সাইন-ইন করা অভিভাবক পড়তে পারেন। Hmmly দল উপহারের তথ্য শুধু উপহার পাঠাতে ও আপনার বার্তার উত্তর দিতে ব্যবহার করে। আমরা তথ্য বিক্রি করি না এবং বিজ্ঞাপনদাতাদের সঙ্গে ভাগ করি না।'] },
      { h: 'আপনার পাঠানো বার্তা', p: ['এই ওয়েবসাইটের যোগাযোগ ফর্ম ব্যবহার করলে আপনার নাম, ইমেইল ঠিকানা ও বার্তা আমরা রাখি, যাতে উত্তর দিতে পারি। অন্য কোনো কাজে ব্যবহার করি না।'] },
      { h: 'তথ্য রাখা ও মুছে ফেলা', p: ['অ্যাকাউন্ট থাকা পর্যন্ত তথ্য রাখা হয়। অভিভাবক যেকোনো সময় বড়দের অংশ থেকে (সেটিংস → নতুন করে শুরু) অনলাইনে ও ফোনে থাকা সব তথ্য মুছে ফেলতে পারেন। এই ওয়েবসাইটের “তথ্য মুছুন” পাতা থেকেও মোছা যায়, অথবা যোগাযোগ ফর্মে অনুরোধ করতে পারেন।'] },
      { h: 'শিশুরা', p: ['Hmmly-র শিশুদের অংশে কোনো ব্যক্তিগত তথ্য চাওয়া হয় না। যা কিছু টাইপ করতে হয় (নাম, ফোন নম্বর, ঠিকানা) তা একটি সহজ “শুধু বড়দের জন্য” সংখ্যা-পরীক্ষার পেছনে এবং অভিভাবকের জন্য।'] },
      { h: 'কণ্ঠস্বর', p: ['জনুর কণ্ঠস্বর অ্যাপে থাকা রেকর্ড করা অডিও। কোনো লাইনের রেকর্ডিং না থাকলে ফোনের নিজস্ব টেক্সট-টু-স্পিচ পড়তে পারে; এটি আপনার ফোনেই চলে।'] },
      { h: 'পরিবর্তন', p: ['নীতি বদলালে পরিবর্তন প্রকাশের আগে ওপরের তারিখ হালনাগাদ করা হবে।'] },
    ],
  },
};

export interface UiStrings {
  home: string; contactTitle: string; contactLead: string; name: string; email: string; message: string; send: string; sending: string;
  sent: string; failed: string; tooMany: string; emailBad: string; required: string; consent: string;
  delTitle: string; delLead: string; delWhat: string[]; delPhone: string; delPhoneHint: string; delSendCode: string; delCode: string; delVerify: string;
  delConfirm: string; delButton: string; delDone: string; delWorking: string; delBadNumber: string; delWrongCode: string; delExpired: string;
  delTooMany: string; delNetwork: string; delOther: string; delNoData: string; delOrForm: string; delFormTitle: string; delFormSend: string; delFormSent: string;
  delRecaptcha: string; delNotConfigured: string;
}

export const ui: Record<Lang, UiStrings> = {
  en: {
    home: 'Home', contactTitle: 'Contact us', contactLead: 'Questions, ideas or a problem with the app? Write to us and we will reply by email.',
    name: 'Your name', email: 'Your email', message: 'Message', send: 'Send message', sending: 'Sending…',
    sent: 'Thank you! Your message is on its way to us.', failed: 'Sorry, the message could not be sent. Please try again in a moment.',
    tooMany: 'Please wait a minute before sending another message.', emailBad: 'Please enter a valid email address.', required: 'Please fill in every field.',
    consent: 'We use your name and email only to reply. See the privacy policy.',
    delTitle: 'Delete my Hmmly data', delLead: 'A parent can erase everything Hmmly stores online, right here. You sign in with the same phone number you used in the app.',
    delWhat: ['Child’s nickname and age', 'Progress and played stories', 'Gift delivery details', 'The sign-in itself (your phone number is removed from our system)'],
    delPhone: 'Parent’s mobile number', delPhoneHint: 'With country code, e.g. +8801XXXXXXXXX', delSendCode: 'Send code', delCode: '6-digit code', delVerify: 'Check code',
    delConfirm: 'I understand this cannot be undone.', delButton: 'Delete everything now', delDone: 'Done. Everything stored online for this number has been deleted.',
    delWorking: 'Working…', delBadNumber: 'That number does not look right. Include the country code.', delWrongCode: 'That code is not right. Try again.',
    delExpired: 'The code expired. Please ask for a new one.', delTooMany: 'Too many tries. Please wait a while and try again.', delNetwork: 'No connection. Please try again.',
    delOther: 'Something went wrong. Please try again, or use the request form below.', delNoData: 'Nothing was stored under this number.',
    delOrForm: 'Cannot sign in?', delFormTitle: 'Ask us to delete it', delFormSend: 'Send request', delFormSent: 'Request received. We will delete the data and reply by email.',
    delRecaptcha: 'Protected by reCAPTCHA', delNotConfigured: 'Online deletion is not switched on yet. Please use the request form below.',
  },
  bn: {
    home: 'হোম', contactTitle: 'যোগাযোগ', contactLead: 'প্রশ্ন, পরামর্শ বা অ্যাপে সমস্যা? আমাদের লিখুন, আমরা ইমেইলে উত্তর দেব।',
    name: 'আপনার নাম', email: 'আপনার ইমেইল', message: 'বার্তা', send: 'বার্তা পাঠান', sending: 'পাঠানো হচ্ছে…',
    sent: 'ধন্যবাদ! আপনার বার্তা আমাদের কাছে পৌঁছে গেছে।', failed: 'দুঃখিত, বার্তা পাঠানো যায়নি। একটু পরে আবার চেষ্টা করুন।',
    tooMany: 'আরেকটি বার্তা পাঠানোর আগে এক মিনিট অপেক্ষা করুন।', emailBad: 'সঠিক ইমেইল ঠিকানা দিন।', required: 'সব ঘর পূরণ করুন।',
    consent: 'আপনার নাম ও ইমেইল শুধু উত্তর দিতে ব্যবহার করা হয়। গোপনীয়তা নীতি দেখুন।',
    delTitle: 'আমার Hmmly তথ্য মুছুন', delLead: 'অভিভাবক এখান থেকেই Hmmly-র অনলাইনে রাখা সব তথ্য মুছে ফেলতে পারেন। অ্যাপে যে ফোন নম্বর দিয়েছিলেন সেটি দিয়ে সাইন-ইন করুন।',
    delWhat: ['শিশুর ডাকনাম ও বয়স', 'অগ্রগতি ও খেলা গল্প', 'উপহার পাঠানোর তথ্য', 'সাইন-ইন নিজেই (আপনার ফোন নম্বর আমাদের সিস্টেম থেকে সরানো হয়)'],
    delPhone: 'অভিভাবকের মোবাইল নম্বর', delPhoneHint: 'দেশের কোডসহ, যেমন +8801XXXXXXXXX', delSendCode: 'কোড পাঠান', delCode: '৬ সংখ্যার কোড', delVerify: 'কোড যাচাই করুন',
    delConfirm: 'আমি বুঝেছি, এটি ফেরানো যাবে না।', delButton: 'এখনই সব মুছে ফেলুন', delDone: 'হয়ে গেছে। এই নম্বরের সঙ্গে অনলাইনে রাখা সব তথ্য মুছে ফেলা হয়েছে।',
    delWorking: 'কাজ চলছে…', delBadNumber: 'নম্বরটি ঠিক মনে হচ্ছে না। দেশের কোডসহ দিন।', delWrongCode: 'কোডটি ঠিক নয়। আবার চেষ্টা করুন।',
    delExpired: 'কোডের সময় শেষ। নতুন কোড চেয়ে নিন।', delTooMany: 'অনেকবার চেষ্টা হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।', delNetwork: 'সংযোগ নেই। আবার চেষ্টা করুন।',
    delOther: 'কিছু একটা গোলমাল হয়েছে। আবার চেষ্টা করুন, অথবা নিচের অনুরোধ ফর্ম ব্যবহার করুন।', delNoData: 'এই নম্বরে কিছু রাখা ছিল না।',
    delOrForm: 'সাইন-ইন করতে পারছেন না?', delFormTitle: 'আমাদের মুছে দিতে বলুন', delFormSend: 'অনুরোধ পাঠান', delFormSent: 'অনুরোধ পেয়েছি। আমরা তথ্য মুছে ইমেইলে জানাব।',
    delRecaptcha: 'reCAPTCHA দ্বারা সুরক্ষিত', delNotConfigured: 'অনলাইনে মোছা এখনও চালু হয়নি। নিচের অনুরোধ ফর্ম ব্যবহার করুন।',
  },
};
