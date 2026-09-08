export type Division = {
  num: string;
  label: string;
  color: string;
  href: string;
  external?: boolean;
  chips?: string[];
  image?: string;
  brand?: string;
  symbol?: string;
};

export const DIVISIONS: Division[] = [
  { num:'01', label:'Water Sports',       color:'#53C8E9', href:'https://ignitewatersports.com/',  external:true, chips:['SUP','Kayak','Paddle Fitness'],        image:'/assets/images/IGNITE-Water-Sports.png', brand:'/assets/images/Ignite brandmark_Water sports_CMYK_FA.png', symbol:'assets/images/ignite_symbols/Water_sports_colour_800px.png' },
  { num:'02', label:'Kids',               color:'#CE00A0', href:'https://ignitekids.com/',         external:true, chips:['Beach Parties','Water Sports','SUP'],   image:'/assets/images/IGNITE-Kids.png', brand:'/assets/images/Ignite brandmark_Kids_CMYK_FA.png', symbol:'assets/images/ignite_symbols/Kids_colour_800px.png' },
  { num:'03', label:'Team Building',      color:'#F93549', href:'https://igniteteambuilding.com/', external:true, chips:['Challenges','Outdoor','Custom'],   image:'/assets/images/IGNITE-Team-Building.png', brand:'/assets/images/Ignite brandmark_Team building_CMYK_FA.png', symbol:'assets/images/ignite_symbols/Team_building_colour_800px.png' },
  { num:'04', label:'Corporate Wellness', color:'#00AE97', href:'https://corporatewellnessme.com/',external:true, chips:['Programmes','Nutrition','Wellbeing'], image:'/assets/images/IGNITE-Corporate-Wellness.png', brand:'/assets/images/Ignite brandmark_Corporate wellness_CMYK_FA.png', symbol:'assets/images/ignite_symbols/Corporate_wellness_colour_800px.png' },
  { num:'05', label:'Fitness & Wellness', color:'#C2D500', href:'https://ignite-wellness.com/ ',  external:true,   chips:['Boot Camp','Yoga','Classes'],         image:'/assets/images/lifestyle-4A0A2745.jpg', brand:'/assets/images/Ignite brandmark_Fitness and wellness_CMYK_FA.png', symbol:'assets/images/ignite_symbols/Fitness_and_wellness_colour_800px.png' },
  { num:'06', label:'Consultancy',        color:'#6BAED6', href:'https://mariole.com/',           external:true, chips:['Strategy','Wellness','Performance'],      image:'/assets/images/IGNITE-Consultancy.png', brand:'/assets/images/Ignite brandmark_Consultancy_CMYK_FA.png', symbol:'assets/images/ignite_symbols/Consultancy_colour_800px.png' },
  // { num:'07', label:'Surface',            color:'#FF6B35', href:'/surface',                        chips:['Beach Volleyball','Boot Camp','Run'], image:'/assets/images/lifestyle-4A0A2745.jpg' },
  // { num:'08', label:'Homespa',            color:'#C4A882', href:'/homespa',                        chips:['Massage','Beauty','Physiotherapy'],   image:'/assets/images/Moonlit-Yoga.jpg' },
];
