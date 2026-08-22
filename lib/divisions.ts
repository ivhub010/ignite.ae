export type Division = {
  num: string;
  label: string;
  color: string;
  href: string;
  external?: boolean;
  chips?: string[];
  image?: string;
};

export const DIVISIONS: Division[] = [
  { num:'01', label:'Fitness & Wellness', color:'#C2D500', href:'/fitness',                        chips:['Boot Camp','Yoga','Classes'],         image:'/assets/images/IGNITE-Fitness-Wellness.png' },
  { num:'02', label:'Corporate Wellness', color:'#00AE97', href:'https://ignite-wellness.com/',    external:true, chips:['Programmes','Workshops','Events'], image:'/assets/images/IGNITE-Corporate-Wellness.png' },
  { num:'03', label:'Team Building',      color:'#F93549', href:'https://igniteteambuilding.com/', external:true, chips:['Challenges','Outdoor','Custom'],   image:'/assets/images/IGNITE-Team-Building.png' },
  { num:'04', label:'Water Sports',       color:'#53C8E9', href:'https://ignitewatersports.com/',  external:true, chips:['SUP','Kayak','Beach Yoga'],        image:'/assets/images/IGNITE-Water-Sports.png' },
  { num:'05', label:'Kids',               color:'#CE00A0', href:'https://ignitekids.com/',         external:true, chips:['Ball Skills','Swim','Mobility'],   image:'/assets/images/IGNITE-Kids.png' },
  { num:'06', label:'Consultancy',        color:'#6BAED6', href:'/consultancy',                    chips:['Strategy','Direction','Health'],      image:'/assets/images/IGNITE-Consultancy.png' },
  // { num:'07', label:'Surface',            color:'#FF6B35', href:'/surface',                        chips:['Beach Volleyball','Boot Camp','Run'], image:'/assets/images/lifestyle-4A0A2745.jpg' },
  // { num:'08', label:'Homespa',            color:'#C4A882', href:'/homespa',                        chips:['Massage','Beauty','Physiotherapy'],   image:'/assets/images/Moonlit-Yoga.jpg' },
];
