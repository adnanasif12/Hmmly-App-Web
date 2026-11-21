import type { Lang } from './types';

export const BOOK_IMAGES = {
  cover: '/images/books/brainy-bee-cover.webp',
  pages: [
    { src: '/images/books/brainy-bee-page-maze.webp', en: 'Maze: help Buzzy find the way home', bn: 'গোলকধাঁধা: মৌ-কে মৌচাকে ফেরাও' },
    { src: '/images/books/brainy-bee-page-logic.webp', en: 'Logic: which one is different?', bn: 'যুক্তি: কোনটা আলাদা?' },
    { src: '/images/books/brainy-bee-page-colour.webp', en: 'Creativity: colour by number', bn: 'সৃজনশীলতা: সংখ্যা দেখে রং করো' },
  ],
};

export interface BooksText {
  navTitle: string; title: string; subtitle: string; badge: string; lead: string; perks: string[];
  previewTitle: string; previewNote: string; coverAlt: string;
  price: string; delivery: string; total: string; free: string;
  orderTitle: string; orderLead: string; name: string; phone: string; district: string; address: string; qty: string; note: string; notePh: string;
  cod: string; place: string; placing: string; tooMany: string;
  required: string; phoneBad: string; failed: string; unavailable: string;
  doneTitle: string; doneBody: string; orderNo: string; another: string; consent: string; close: string;
}

export const books: Record<Lang, BooksText> = {
  en: {
    navTitle: 'Books', title: 'Brainy Bee: Brain Booster Activity Book', subtitle: 'A 33-page printed activity book for ages 4–7',
    badge: 'Level 1 · Ages 4–7',
    lead: 'Mazes, odd-one-out puzzles, counting, patterns, dot-to-dot and colour-by-number. Every page trains one thinking skill, with a short tip for the grown-up beside it. Bangla with English hints.',
    perks: ['33 pages, one skill per page', 'Focus · Logic · Memory · Creativity · Fine motor', 'A tip for parents on every page', 'Pay cash when the book arrives'],
    previewTitle: 'Take a look inside', previewNote: 'Cover and three sample pages. Tap a picture to enlarge.', coverAlt: 'Front cover of Brainy Bee',
    price: 'Book price', delivery: 'Delivery', total: 'Total', free: 'Free',
    orderTitle: 'Order your copy', orderLead: 'Fill in your details. We will call you to confirm, then deliver. You pay in cash on delivery.',
    name: 'Your name', phone: 'Mobile number', district: 'District / area', address: 'Full address', qty: 'Copies', note: 'Anything we should know? (optional)', notePh: 'For example: call after 5 pm',
    cod: 'Cash on delivery', place: 'Place order', placing: 'Placing order…', tooMany: 'Please wait a moment before ordering again.',
    required: 'Please fill in your name, mobile number, area and address.', phoneBad: 'That mobile number does not look right. Example: 01712345678',
    failed: 'Sorry, the order did not go through. Please try again, or write to us from the Contact page.', unavailable: 'Ordering is not available right now. Please try again later.',
    doneTitle: 'Thank you! Your order is in.', doneBody: 'We will call you on your mobile number to confirm the order and delivery time.', orderNo: 'Order number', another: 'Order another copy',
    consent: 'We use your details only to deliver this order.', close: 'Close',
  },
  bn: {
    navTitle: 'বই', title: 'মৌ-এর মগজ খেলা (Brainy Bee)', subtitle: '৪–৭ বছরের জন্য ৩৩ পৃষ্ঠার ছাপানো অ্যাক্টিভিটি বই',
    badge: 'লেভেল ১ · বয়স ৪–৭',
    lead: 'গোলকধাঁধা, কোনটা আলাদা, গোনা, নকশা মেলানো, বিন্দু মেলানো আর সংখ্যা দেখে রং করা। প্রতিটি পৃষ্ঠা একটি করে ভাবনার দক্ষতা গড়ে, পাশে অভিভাবকের জন্য ছোট টিপস। বাংলায়, ইংরেজি ইঙ্গিতসহ।',
    perks: ['৩৩ পৃষ্ঠা, প্রতি পৃষ্ঠায় একটি দক্ষতা', 'মনোযোগ · যুক্তি · স্মৃতি · সৃজনশীলতা · হাতের দক্ষতা', 'প্রতি পৃষ্ঠায় অভিভাবকের টিপস', 'বই হাতে পেয়ে টাকা দিন'],
    previewTitle: 'ভেতরটা একটু দেখুন', previewNote: 'প্রচ্ছদ আর তিনটি নমুনা পৃষ্ঠা। ছবিতে ট্যাপ করলে বড় হবে।', coverAlt: 'মৌ-এর মগজ খেলা বইয়ের প্রচ্ছদ',
    price: 'বইয়ের দাম', delivery: 'ডেলিভারি', total: 'মোট', free: 'ফ্রি',
    orderTitle: 'বইটি অর্ডার করুন', orderLead: 'আপনার তথ্য দিন। আমরা ফোন করে নিশ্চিত করে পৌঁছে দেব। টাকা দেবেন বই হাতে পেয়ে।',
    name: 'আপনার নাম', phone: 'মোবাইল নম্বর', district: 'জেলা / এলাকা', address: 'পূর্ণ ঠিকানা', qty: 'কয়টি বই', note: 'আর কিছু জানাতে চান? (ঐচ্ছিক)', notePh: 'যেমন: বিকাল ৫টার পর ফোন করবেন',
    cod: 'ক্যাশ অন ডেলিভারি', place: 'অর্ডার করুন', placing: 'অর্ডার হচ্ছে…', tooMany: 'আবার অর্ডার করার আগে একটু অপেক্ষা করুন।',
    required: 'নাম, মোবাইল নম্বর, এলাকা ও ঠিকানা দিন।', phoneBad: 'মোবাইল নম্বরটি ঠিক মনে হচ্ছে না। যেমন: ০১৭১২৩৪৫৬৭৮',
    failed: 'দুঃখিত, অর্ডারটি যায়নি। আবার চেষ্টা করুন, অথবা যোগাযোগ পাতা থেকে লিখুন।', unavailable: 'এখন অর্ডার নেওয়া যাচ্ছে না। একটু পরে চেষ্টা করুন।',
    doneTitle: 'ধন্যবাদ! আপনার অর্ডার পেয়েছি।', doneBody: 'অর্ডার ও ডেলিভারির সময় নিশ্চিত করতে আমরা আপনার মোবাইল নম্বরে ফোন করব।', orderNo: 'অর্ডার নম্বর', another: 'আরেকটি অর্ডার করুন',
    consent: 'আপনার তথ্য শুধু এই অর্ডার পৌঁছে দিতে ব্যবহার হবে।', close: 'বন্ধ করুন',
  },
};
