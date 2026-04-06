// ╔══════════════════════════════════════════════════════════════════╗
// ║  CELESTE HOLMES PHOTOGRAPHY — Complete Studio Platform v3.0     ║
// ║  celesteholmesphotography.com · North Las Vegas, NV             ║
// ║  Studio Mgmt · Client Portal · Payments · AI · Mobile-First     ║
// ╚══════════════════════════════════════════════════════════════════╝
import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard, Users, Calendar, Sparkles, BarChart2, ImageIcon,
  Receipt, MessageSquare, Settings, X, Plus, Search, Mail, Phone,
  MapPin, Clock, DollarSign, Copy, Check, Camera, Upload, Shield,
  Lock, Send, Zap, Instagram, FileImage, ArrowUpRight, ArrowDownRight,
  Info, CreditCard, FileText, Eye, EyeOff, ChevronRight, Star,
  LogOut, Home, BookOpen, Image, Wallet, Menu, TrendingUp, Bell,
  AlertCircle, CheckCircle, Globe, Code, Smartphone, ExternalLink,
  User, Package, Download
} from "lucide-react";

// ─── RESPONSIVE HOOK ───────────────────────────────────────────────────────────
const useBreak = () => {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return { isMobile: w < 768, isTablet: w < 1100, w };
};

// ─── FONTS ─────────────────────────────────────────────────────────────────────
const FontLoader = () => {
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
    document.head.appendChild(l);
  }, []);
  return null;
};

// ─── THEME ─────────────────────────────────────────────────────────────────────
const C = {
  bg:"#07060A", surface:"#0F0D14", card:"#171520", card2:"#1E1B2A",
  border:"#2A2638", border2:"#3A3550",
  gold:"#C9A96E", goldL:"#E8C98A", goldD:"#9A7A42",
  cream:"#F0EAE0", muted:"#7A6E8A", muted2:"#524A64",
  accent:"#D4826A", green:"#6BAF82", blue:"#6A9AC4",
  red:"#C07070", purple:"#9A7AC4",
};
const BRAND = "Celeste Holmes Photography";
const PHONE = "(951) 545-0714";
const WEBSITE = "celesteholmesphotography.com";
const LOCATION = "North Las Vegas, NV";
const EMAIL = "info@celesteholmesphotography.com";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const initClients = [
  { id:1, name:"Sofia Reyes",        email:"sofia@email.com",      phone:"702-555-0191", type:"Portrait",   shoots:4, spent:1200, lastShoot:"2026-03-15", status:"active",   notes:"Prefers natural light", accessCode:"SOF123" },
  { id:2, name:"Diamond Events LLC", email:"bk@diamond.com",       phone:"702-555-0242", type:"Marketing",  shoots:7, spent:5800, lastShoot:"2026-03-28", status:"active",   notes:"Monthly retainer",     accessCode:"DIA456" },
  { id:3, name:"Aaliyah Thompson",   email:"aaliyah@email.com",    phone:"702-555-0383", type:"Portrait",   shoots:2, spent:450,  lastShoot:"2026-01-10", status:"active",   notes:"Brand headshots",      accessCode:"AAL789" },
  { id:4, name:"Luxe Interiors NV",  email:"hi@luxeinteriors.com", phone:"702-555-0474", type:"Still Life", shoots:3, spent:2100, lastShoot:"2026-02-20", status:"active",   notes:"Interior photography", accessCode:"LUX012" },
  { id:5, name:"Marcus Webb",        email:"mwebb@mail.com",       phone:"702-555-0565", type:"Portrait",   shoots:1, spent:300,  lastShoot:"2025-11-05", status:"inactive", notes:"Actor headshots",      accessCode:"MAR345" },
];

const initEvents = [
  { id:1, title:"Spring Portrait Mini Sessions", date:"2026-04-20", time:"10:00 AM", location:"Henderson Arts District, NV", type:"Mini Session",    capacity:8,  booked:3, price:150,  description:"30-min portrait sessions in curated outdoor settings.", status:"upcoming" },
  { id:2, title:"Brand Shoot — Q2",              date:"2026-04-28", time:"9:00 AM",  location:"Downtown Studio, Las Vegas",  type:"Marketing Shoot", capacity:1,  booked:1, price:800,  description:"Full-day brand identity photography package.", status:"booked" },
  { id:3, title:"Still Life Workshop",           date:"2026-05-10", time:"2:00 PM",  location:"Arts Factory, Las Vegas",     type:"Workshop",        capacity:12, booked:5, price:95,   description:"Hands-on still life photography workshop.", status:"upcoming" },
];

const initIncome = [
  { id:1, date:"2026-03-28", client:"Diamond Events LLC", description:"Q1 Retainer",      category:"Retainer",    amount:1200 },
  { id:2, date:"2026-03-15", client:"Sofia Reyes",        description:"Portrait Session",  category:"Session Fee", amount:350  },
  { id:3, date:"2026-02-20", client:"Luxe Interiors NV",  description:"Interior Shoot",    category:"Session Fee", amount:800  },
  { id:4, date:"2026-01-10", client:"Aaliyah Thompson",   description:"Brand Headshots",   category:"Session Fee", amount:450  },
  { id:5, date:"2026-01-05", client:"Diamond Events LLC", description:"Dec Retainer",      category:"Retainer",    amount:1200 },
];

const initExpenses = [
  { id:1, date:"2026-03-01", description:"Adobe Creative Cloud",    category:"Software",  amount:60  },
  { id:2, date:"2026-02-15", description:"Backdrop & Props",        category:"Props",     amount:220 },
  { id:3, date:"2026-01-20", description:"Gasoline / Travel",       category:"Travel",    amount:85  },
  { id:4, date:"2026-01-05", description:"Memory Cards × 4",       category:"Equipment", amount:140 },
];

const initInvoices = [
  { id:1, number:"INV-2026-001", client:"Sofia Reyes",        clientEmail:"sofia@email.com",    date:"2026-03-15", due:"2026-03-30", items:[{desc:"Portrait Session 2hr",qty:1,rate:350}], status:"paid",    paid:350  },
  { id:2, number:"INV-2026-002", client:"Diamond Events LLC", clientEmail:"bk@diamond.com",     date:"2026-03-28", due:"2026-04-12", items:[{desc:"Monthly Retainer",qty:1,rate:1200}],   status:"sent",    paid:0    },
  { id:3, number:"INV-2026-003", client:"Luxe Interiors NV",  clientEmail:"hi@luxeinteriors.com",date:"2026-04-01", due:"2026-04-15", items:[{desc:"Interior Shoot",qty:1,rate:800},{desc:"Editing & Retouching",qty:1,rate:150}], status:"overdue", paid:0 },
  { id:4, number:"INV-2026-004", client:"Aaliyah Thompson",   clientEmail:"aaliyah@email.com",  date:"2026-04-05", due:"2026-04-20", items:[{desc:"Brand Headshots",qty:1,rate:450}],    status:"draft",   paid:0    },
];

const initGalleries = [
  { id:1, clientId:1, clientName:"Sofia Reyes",        title:"Spring Portrait Session", date:"2026-03-15", images:[], status:"pending",  watermark:true,  locked:true  },
  { id:2, clientId:2, clientName:"Diamond Events LLC", title:"Q1 Brand Shoot",          date:"2026-02-28", images:[], status:"approved", watermark:false, locked:false },
];

const initMessages = [
  { id:1, from:"Sofia Reyes", email:"sofia@email.com", subject:"Question about prints", body:"Hi Celeste! I wanted to ask about ordering prints from my session. What sizes do you offer?", date:"2026-04-03", read:false },
  { id:2, from:"New Inquiry", email:"jessica@mail.com", subject:"Wedding Photography", body:"Hello, I'm getting married in October 2026 and I'm looking for a photographer. Do you have availability?", date:"2026-04-02", read:true },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────────
const fmt$ = n => "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits:2, maximumFractionDigits:2 });

const invoiceTotal = inv => inv.items.reduce((a,i)=>a+(i.qty*i.rate),0);

const typeColor = t => {
  const m = { "Portrait":C.blue, "Marketing":C.accent, "Marketing Shoot":C.accent,
               "Still Life":C.green, "Workshop":C.gold, "Mini Session":C.goldL,
               "Wedding":C.purple, "Event":C.accent };
  return m[t] || C.muted;
};

const statusColor = s => {
  const m = { paid:C.green, sent:C.blue, overdue:C.red, draft:C.muted,
               upcoming:C.gold, booked:C.green, active:C.green, inactive:C.muted };
  return m[s] || C.muted;
};

const calcTax = net => {
  if (net<=0) return { seTax:0, incomeTax:0, total:0, effective:0 };
  const seBase=net*0.9235, seTax=seBase*0.153, seDeduct=seTax*0.5;
  const agi=net-seDeduct, taxable=Math.max(0,agi-15000);
  let inc=0, rem=taxable;
  for(const [sz,r] of [[11925,.10],[36550,.12],[54875,.22],[93950,.24],[53225,.32],[375825,.35],[Infinity,.37]]){
    const c=Math.min(rem,sz); inc+=c*r; rem-=c; if(rem<=0)break;
  }
  return { seTax, incomeTax:inc, total:seTax+inc, effective:net>0?(seTax+inc)/net*100:0 };
};

const QUARTERS=[
  {q:"Q1",months:[1,2,3],due:"Apr 15, 2026"},
  {q:"Q2",months:[4,5,6],due:"Jun 16, 2026"},
  {q:"Q3",months:[7,8,9],due:"Sep 15, 2026"},
  {q:"Q4",months:[10,11,12],due:"Jan 15, 2027"},
];

// ─── SHARED UI ─────────────────────────────────────────────────────────────────
const Badge = ({label,color=C.gold}) => (
  <span style={{fontSize:10,fontFamily:"'DM Sans',sans-serif",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase",color,background:color+"18",border:`1px solid ${color}30`,borderRadius:4,padding:"2px 8px",whiteSpace:"nowrap"}}>
    {label}
  </span>
);

const Inp = ({label,style:s={},...p}) => (
  <div style={{marginBottom:14}}>
    {label&&<label style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>{label}</label>}
    <input {...p} style={{width:"100%",background:C.card2,border:`1px solid ${C.border2}`,borderRadius:8,padding:"10px 12px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none",boxSizing:"border-box",...s}}/>
  </div>
);

const Sel = ({label,children,...p}) => (
  <div style={{marginBottom:14}}>
    {label&&<label style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>{label}</label>}
    <select {...p} style={{width:"100%",background:C.card2,border:`1px solid ${C.border2}`,borderRadius:8,padding:"10px 12px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none"}}>{children}</select>
  </div>
);

const GBtn = ({children,style:s={},...p}) => (
  <button {...p} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"10px 18px",background:`linear-gradient(135deg,${C.gold},${C.goldD})`,border:"none",borderRadius:8,color:"#07060A",fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",...s}}>
    {children}
  </button>
);

const GhostBtn = ({children,style:s={},...p}) => (
  <button {...p} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"9px 16px",background:"transparent",border:`1px solid ${C.border2}`,borderRadius:8,color:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:13,cursor:"pointer",...s}}>
    {children}
  </button>
);

const Card = ({children,style:s={}}) => (
  <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:20,...s}}>{children}</div>
);

const SectionTitle = ({children}) => (
  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.09em",marginBottom:16}}>{children}</div>
);

const H1 = ({children,sub}) => (
  <div style={{marginBottom:24}}>
    <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:400,color:C.cream,margin:0,marginBottom:sub?4:0}}>{children}</h1>
    {sub&&<p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,margin:0}}>{sub}</p>}
  </div>
);

const StatCard = ({label,value,sub,color=C.gold,icon:Icon}) => (
  <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"18px 20px",flex:1,minWidth:0}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8}}>{label}</div>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:700,color:C.cream,lineHeight:1}}>{value}</div>
        {sub&&<div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color,marginTop:5}}>{sub}</div>}
      </div>
      <div style={{width:36,height:36,background:color+"14",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <Icon size={16} color={color}/>
      </div>
    </div>
  </div>
);

const Modal = ({title,onClose,children,width=440}) => (
  <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.78)",backdropFilter:"blur(6px)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
    <div style={{background:C.card,border:`1px solid ${C.border2}`,borderRadius:18,padding:28,width,maxWidth:"100%",maxHeight:"90vh",overflowY:"auto"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
        <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:C.cream,margin:0}}>{title}</h3>
        <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:C.muted,padding:4}}><X size={18}/></button>
      </div>
      {children}
    </div>
  </div>
);

// ─── ADMIN NAV ────────────────────────────────────────────────────────────────
const ADMIN_NAV = [
  {id:"dashboard", label:"Dashboard",      icon:LayoutDashboard},
  {id:"clients",   label:"Clients",        icon:Users},
  {id:"events",    label:"Events",         icon:Calendar},
  {id:"invoices",  label:"Invoices",       icon:Receipt},
  {id:"proofs",    label:"Proof Gallery",  icon:ImageIcon},
  {id:"marketing", label:"Marketing Hub",  icon:Sparkles},
  {id:"revenue",   label:"Revenue & Tax",  icon:BarChart2},
  {id:"ai",        label:"AI Assistant",   icon:MessageSquare},
  {id:"settings",  label:"Integration",    icon:Settings},
];

const Sidebar = ({view,setView,onPortal,msgs}) => {
  const unread = msgs.filter(m=>!m.read).length;
  return (
    <aside style={{width:220,minHeight:"100vh",background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",position:"fixed",left:0,top:0,bottom:0,zIndex:200,overflowY:"auto"}}>
      <div style={{padding:"24px 18px 18px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
          <div style={{width:32,height:32,background:`linear-gradient(135deg,${C.gold},${C.goldD})`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <Camera size={15} color="#07060A"/>
          </div>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:12,fontWeight:700,color:C.cream,lineHeight:1.2}}>Celeste Holmes</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.muted,letterSpacing:"0.05em",textTransform:"uppercase"}}>Photography</div>
          </div>
        </div>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.muted2,marginTop:4}}>{LOCATION}</div>
      </div>
      <div style={{height:1,background:C.border,margin:"0 0 10px"}}/>
      <nav style={{flex:1,padding:"0 10px"}}>
        {ADMIN_NAV.map(({id,label,icon:Icon}) => {
          const active=view===id;
          return (
            <button key={id} onClick={()=>setView(id)} style={{display:"flex",alignItems:"center",gap:9,width:"100%",padding:"9px 10px",marginBottom:2,borderRadius:8,border:"none",cursor:"pointer",textAlign:"left",transition:"all 0.15s",background:active?`${C.gold}14`:"transparent",color:active?C.gold:C.muted,borderLeft:active?`2px solid ${C.gold}`:"2px solid transparent"}}>
              <Icon size={15}/>
              <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:active?500:400}}>{label}</span>
              {id==="ai"&&unread>0&&<span style={{marginLeft:"auto",background:C.red,color:"#fff",borderRadius:"50%",width:16,height:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700}}>{unread}</span>}
            </button>
          );
        })}
      </nav>
      <div style={{padding:"12px 10px",borderTop:`1px solid ${C.border}`}}>
        <button onClick={onPortal} style={{display:"flex",alignItems:"center",gap:8,width:"100%",padding:"9px 10px",borderRadius:8,border:`1px solid ${C.border2}`,background:"transparent",color:C.gold,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer"}}>
          <ExternalLink size={13}/> Client Portal Preview
        </button>
      </div>
    </aside>
  );
};

const BottomNav = ({view,setView,onPortal}) => {
  const mobileNav = ADMIN_NAV.slice(0,5);
  return (
    <div style={{position:"fixed",bottom:0,left:0,right:0,background:C.surface,borderTop:`1px solid ${C.border}`,display:"flex",zIndex:200,paddingBottom:"env(safe-area-inset-bottom)"}}>
      {mobileNav.map(({id,icon:Icon}) => {
        const active=view===id;
        return (
          <button key={id} onClick={()=>setView(id)} style={{flex:1,padding:"10px 0 8px",border:"none",background:"none",cursor:"pointer",color:active?C.gold:C.muted,display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
            <Icon size={18}/>
            <span style={{fontSize:9,fontFamily:"'DM Sans',sans-serif",textTransform:"uppercase",letterSpacing:"0.04em"}}>{id}</span>
          </button>
        );
      })}
      <button onClick={onPortal} style={{flex:1,padding:"10px 0 8px",border:"none",background:"none",cursor:"pointer",color:C.muted,display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
        <Globe size={18}/><span style={{fontSize:9,fontFamily:"'DM Sans',sans-serif",textTransform:"uppercase",letterSpacing:"0.04em"}}>portal</span>
      </button>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// ADMIN VIEWS
// ══════════════════════════════════════════════════════════════════

// ─── DASHBOARD ────────────────────────────────────────────────────
const Dashboard = ({clients,events,income,expenses,invoices,msgs,setView}) => {
  const gross=income.reduce((a,i)=>a+i.amount,0);
  const exp=expenses.reduce((a,e)=>a+e.amount,0);
  const {total:estTax}=calcTax(gross-exp);
  const outstanding=invoices.filter(i=>i.status!=="paid"&&i.status!=="draft").reduce((a,i)=>a+invoiceTotal(i),0);
  const unread=msgs.filter(m=>!m.read).length;
  return (
    <div>
      <H1 sub={`${new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}`}>Good morning, Celeste ✦</H1>
      <div style={{display:"flex",gap:12,marginBottom:20,flexWrap:"wrap"}}>
        <StatCard label="Active Clients" value={clients.filter(c=>c.status==="active").length} sub="in your roster" color={C.blue} icon={Users}/>
        <StatCard label="YTD Revenue" value={fmt$(gross)} sub={`${fmt$(gross-exp)} net profit`} color={C.green} icon={TrendingUp}/>
        <StatCard label="Outstanding" value={fmt$(outstanding)} sub="awaiting payment" color={C.accent} icon={Receipt}/>
        <StatCard label="Est. Tax" value={fmt$(estTax)} sub="annual IRS estimate" color={C.red} icon={BarChart2}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <Card>
          <SectionTitle>Upcoming Events</SectionTitle>
          {events.filter(e=>e.status!=="past").slice(0,3).map(ev=>(
            <div key={ev.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:`1px solid ${C.border}`}}>
              <div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream,fontWeight:500,marginBottom:2}}>{ev.title}</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted}}>{ev.date} · {ev.location.split(",")[0]}</div>
              </div>
              <Badge label={ev.type} color={typeColor(ev.type)}/>
            </div>
          ))}
          <button onClick={()=>setView("events")} style={{display:"flex",alignItems:"center",gap:4,marginTop:12,background:"none",border:"none",cursor:"pointer",color:C.gold,fontFamily:"'DM Sans',sans-serif",fontSize:12}}>View all <ChevronRight size={12}/></button>
        </Card>
        <Card>
          <SectionTitle>Invoices — Action Needed</SectionTitle>
          {invoices.filter(i=>i.status==="overdue"||i.status==="sent").map(inv=>(
            <div key={inv.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:`1px solid ${C.border}`}}>
              <div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream,fontWeight:500}}>{inv.client}</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted}}>{inv.number} · Due {inv.due}</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:statusColor(inv.status),fontWeight:500}}>{fmt$(invoiceTotal(inv))}</div>
                <Badge label={inv.status} color={statusColor(inv.status)}/>
              </div>
            </div>
          ))}
          <button onClick={()=>setView("invoices")} style={{display:"flex",alignItems:"center",gap:4,marginTop:12,background:"none",border:"none",cursor:"pointer",color:C.gold,fontFamily:"'DM Sans',sans-serif",fontSize:12}}>Manage invoices <ChevronRight size={12}/></button>
        </Card>
        {unread>0&&(
          <Card style={{gridColumn:"1/-1",background:`${C.blue}08`,border:`1px solid ${C.blue}25`}}>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <Bell size={16} color={C.blue}/>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream,fontWeight:500}}>{unread} unread message{unread>1?"s":""}</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>New client inquiries waiting for your response</div>
              </div>
              <button onClick={()=>setView("ai")} style={{padding:"8px 14px",background:`${C.blue}18`,border:`1px solid ${C.blue}40`,borderRadius:8,color:C.blue,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer"}}>View</button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

// ─── CLIENTS ──────────────────────────────────────────────────────
const Clients = ({clients,setClients}) => {
  const [search,setSearch]=useState("");
  const [filter,setFilter]=useState("All");
  const [showAdd,setShowAdd]=useState(false);
  const [form,setForm]=useState({name:"",email:"",phone:"",type:"Portrait",notes:""});
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const types=["All","Portrait","Still Life","Marketing","Wedding","Event"];
  const filtered=clients.filter(c=>{
    const q=search.toLowerCase();
    return (c.name.toLowerCase().includes(q)||c.email.toLowerCase().includes(q))&&(filter==="All"||c.type===filter);
  });
  const add=()=>{
    if(!form.name||!form.email)return;
    const code=(form.name.slice(0,3)+Math.floor(Math.random()*900+100)).toUpperCase();
    setClients(cs=>[{...form,id:Date.now(),shoots:0,spent:0,lastShoot:"—",status:"active",accessCode:code},...cs]);
    setForm({name:"",email:"",phone:"",type:"Portrait",notes:""});
    setShowAdd(false);
  };
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20,flexWrap:"wrap",gap:12}}>
        <H1 sub={`${clients.length} total · ${clients.filter(c=>c.status==="active").length} active`}>Clients</H1>
        <GBtn onClick={()=>setShowAdd(true)}><Plus size={14}/>New Client</GBtn>
      </div>
      <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
        <div style={{position:"relative",flex:1,minWidth:180}}>
          <Search size={13} style={{position:"absolute",left:11,top:"50%",transform:"translateY(-50%)",color:C.muted}}/>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..." style={{width:"100%",background:C.card,border:`1px solid ${C.border}`,borderRadius:8,padding:"9px 12px 9px 32px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none",boxSizing:"border-box"}}/>
        </div>
        {types.map(t=><button key={t} onClick={()=>setFilter(t)} style={{padding:"8px 12px",background:filter===t?`${C.gold}14`:C.card,border:`1px solid ${filter===t?C.gold:C.border}`,borderRadius:8,color:filter===t?C.gold:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer"}}>{t}</button>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:14}}>
        {filtered.map(cl=>(
          <div key={cl.id} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:18}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
              <div style={{display:"flex",gap:11,alignItems:"center"}}>
                <div style={{width:42,height:42,borderRadius:"50%",background:`${typeColor(cl.type)}18`,border:`1.5px solid ${typeColor(cl.type)}40`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:typeColor(cl.type)}}>{cl.name[0]}</span>
                </div>
                <div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:500,color:C.cream}}>{cl.name}</div>
                  <Badge label={cl.type} color={typeColor(cl.type)}/>
                </div>
              </div>
              <span style={{fontFamily:"'Playfair Display',serif",fontSize:16,color:C.gold}}>{fmt$(cl.spent)}</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:10}}>
              <div style={{display:"flex",gap:7,alignItems:"center"}}><Mail size={11} color={C.muted2}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{cl.email}</span></div>
              <div style={{display:"flex",gap:7,alignItems:"center"}}><Phone size={11} color={C.muted2}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{cl.phone}</span></div>
            </div>
            {cl.notes&&<div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted2,fontStyle:"italic",padding:"7px 10px",background:C.card2,borderRadius:6,marginBottom:10}}>{cl.notes}</div>}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted}}>{cl.shoots} shoots</span>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.muted2}}>Portal: <span style={{color:C.gold}}>{cl.accessCode}</span></span>
                <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:cl.status==="active"?C.green:C.muted2}}>● {cl.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAdd&&(
        <Modal title="New Client" onClose={()=>setShowAdd(false)}>
          <Inp label="Name"  value={form.name}  onChange={e=>upd("name",e.target.value)}/>
          <Inp label="Email" value={form.email} onChange={e=>upd("email",e.target.value)} type="email"/>
          <Inp label="Phone" value={form.phone} onChange={e=>upd("phone",e.target.value)}/>
          <Sel label="Type" value={form.type} onChange={e=>upd("type",e.target.value)}>
            {["Portrait","Still Life","Marketing","Wedding","Event"].map(t=><option key={t}>{t}</option>)}
          </Sel>
          <div style={{marginBottom:20}}>
            <label style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Notes</label>
            <textarea value={form.notes} onChange={e=>upd("notes",e.target.value)} rows={3} style={{width:"100%",background:C.card2,border:`1px solid ${C.border2}`,borderRadius:8,padding:"10px 12px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none",resize:"none",boxSizing:"border-box"}}/>
          </div>
          <GBtn onClick={add} style={{width:"100%"}}>Add Client</GBtn>
        </Modal>
      )}
    </div>
  );
};

// ─── EVENTS ───────────────────────────────────────────────────────
const Events = ({events,setEvents}) => {
  const [showAdd,setShowAdd]=useState(false);
  const [form,setForm]=useState({title:"",date:"",time:"",location:"",type:"Mini Session",capacity:10,price:150,description:""});
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const add=()=>{
    if(!form.title||!form.date)return;
    setEvents(ev=>[...ev,{...form,id:Date.now(),booked:0,status:"upcoming"}]);
    setShowAdd(false);
  };
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20,flexWrap:"wrap",gap:12}}>
        <H1 sub={`${events.filter(e=>e.status!=="past").length} active events`}>Events</H1>
        <GBtn onClick={()=>setShowAdd(true)}><Plus size={14}/>New Event</GBtn>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:14}}>
        {events.map(ev=>{
          const pct=Math.round((ev.booked/ev.capacity)*100);
          const tc=typeColor(ev.type);
          return (
            <div key={ev.id} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:14,padding:"18px 20px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12}}>
                <div style={{flex:1}}>
                  <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap",marginBottom:8}}>
                    <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:C.cream,fontWeight:400,margin:0}}>{ev.title}</h3>
                    <Badge label={ev.type} color={tc}/>
                    <Badge label={ev.status} color={statusColor(ev.status)}/>
                  </div>
                  <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:8}}>
                    {[[Calendar,ev.date],[Clock,ev.time],[MapPin,ev.location],[DollarSign,fmt$(ev.price)]].map(([Icon,val],i)=>(
                      <div key={i} style={{display:"flex",gap:5,alignItems:"center"}}>
                        <Icon size={11} color={C.muted2}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{val}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,lineHeight:1.6,margin:0}}>{ev.description}</p>
                </div>
                <div style={{textAlign:"center",minWidth:80}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.cream}}>{ev.booked}<span style={{fontSize:13,color:C.muted}}>/{ev.capacity}</span></div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.muted,marginBottom:6}}>booked</div>
                  <div style={{width:72,height:4,background:C.border2,borderRadius:2,margin:"0 auto"}}>
                    <div style={{width:`${pct}%`,height:"100%",background:pct>80?C.green:C.gold,borderRadius:2}}/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showAdd&&(
        <Modal title="Create Event" onClose={()=>setShowAdd(false)} width={480}>
          <Inp label="Event Title" value={form.title}    onChange={e=>upd("title",e.target.value)}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <Inp label="Date" value={form.date} onChange={e=>upd("date",e.target.value)} type="date"/>
            <Inp label="Time" value={form.time} onChange={e=>upd("time",e.target.value)}/>
          </div>
          <Inp label="Location" value={form.location} onChange={e=>upd("location",e.target.value)}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <Inp label="Price ($)" value={form.price} onChange={e=>upd("price",+e.target.value)} type="number"/>
            <Inp label="Capacity" value={form.capacity} onChange={e=>upd("capacity",+e.target.value)} type="number"/>
          </div>
          <Sel label="Type" value={form.type} onChange={e=>upd("type",e.target.value)}>
            {["Mini Session","Full Session","Marketing Shoot","Wedding","Workshop","Pop-Up","Event"].map(t=><option key={t}>{t}</option>)}
          </Sel>
          <div style={{marginBottom:20}}>
            <label style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Description</label>
            <textarea value={form.description} onChange={e=>upd("description",e.target.value)} rows={3} style={{width:"100%",background:C.card2,border:`1px solid ${C.border2}`,borderRadius:8,padding:"10px 12px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none",resize:"none",boxSizing:"border-box"}}/>
          </div>
          <GBtn onClick={add} style={{width:"100%"}}>Create Event</GBtn>
        </Modal>
      )}
    </div>
  );
};

// ─── INVOICES & PAYMENTS ──────────────────────────────────────────
const Invoices = ({invoices,setInvoices,clients}) => {
  const [tab,setTab]=useState("all");
  const [showAdd,setShowAdd]=useState(false);
  const [showPay,setShowPay]=useState(null);
  const [paySuccess,setPaySuccess]=useState(false);
  const [form,setForm]=useState({client:"",clientEmail:"",due:"",items:[{desc:"",qty:1,rate:0}]});
  const [cardForm,setCardForm]=useState({name:"",number:"",exp:"",cvv:""});
  const upd=(k,v)=>setForm(f=>({...f,[k]:v}));
  const addLine=()=>setForm(f=>({...f,items:[...f.items,{desc:"",qty:1,rate:0}]}));
  const updLine=(i,k,v)=>setForm(f=>({...f,items:f.items.map((l,idx)=>idx===i?{...l,[k]:v}:l)}));
  const create=()=>{
    if(!form.client)return;
    const num="INV-"+new Date().getFullYear()+"-"+(invoices.length+1).toString().padStart(3,"0");
    setInvoices(arr=>[...arr,{...form,id:Date.now(),number:num,date:new Date().toISOString().slice(0,10),status:"draft",paid:0}]);
    setForm({client:"",clientEmail:"",due:"",items:[{desc:"",qty:1,rate:0}]});
    setShowAdd(false);
  };
  const sendInv=(id)=>setInvoices(arr=>arr.map(i=>i.id===id?{...i,status:"sent"}:i));
  const markPaid=(id)=>{
    setInvoices(arr=>arr.map(i=>i.id===id?{...i,status:"paid",paid:invoiceTotal(i)}:i));
    setShowPay(null); setPaySuccess(true); setTimeout(()=>setPaySuccess(false),3000);
  };
  const filtered=tab==="all"?invoices:invoices.filter(i=>i.status===tab);
  const tabs=["all","draft","sent","overdue","paid"];
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20,flexWrap:"wrap",gap:12}}>
        <H1 sub="Billing, invoices & online payments">Invoices</H1>
        <GBtn onClick={()=>setShowAdd(true)}><Plus size={14}/>New Invoice</GBtn>
      </div>
      {paySuccess&&(
        <div style={{background:`${C.green}12`,border:`1px solid ${C.green}30`,borderRadius:10,padding:"12px 16px",marginBottom:16,display:"flex",gap:8,alignItems:"center"}}>
          <CheckCircle size={14} color={C.green}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.green}}>Payment received successfully!</span>
        </div>
      )}
      <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>
        {tabs.map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:"7px 14px",background:tab===t?`${C.gold}14`:C.card,border:`1px solid ${tab===t?C.gold:C.border}`,borderRadius:8,color:tab===t?C.gold:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer",textTransform:"capitalize"}}>{t}</button>)}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {filtered.map(inv=>{
          const total=invoiceTotal(inv);
          const sc=statusColor(inv.status);
          return (
            <div key={inv.id} style={{background:C.card,border:`1px solid ${inv.status==="overdue"?C.red+"40":C.border}`,borderRadius:12,padding:"16px 20px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12}}>
                <div>
                  <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
                    <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted}}>{inv.number}</span>
                    <Badge label={inv.status} color={sc}/>
                    {inv.status==="overdue"&&<Badge label="PAST DUE" color={C.red}/>}
                  </div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:500,color:C.cream,marginBottom:4}}>{inv.client}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>Issued {inv.date} · Due {inv.due}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:inv.status==="paid"?C.green:C.cream,marginBottom:8}}>{fmt$(total)}</div>
                  <div style={{display:"flex",gap:8,justifyContent:"flex-end",flexWrap:"wrap"}}>
                    {inv.status==="draft"&&<GhostBtn onClick={()=>sendInv(inv.id)} style={{fontSize:12,padding:"6px 12px"}}><Send size={12}/>Send</GhostBtn>}
                    {(inv.status==="sent"||inv.status==="overdue")&&(
                      <GBtn onClick={()=>setShowPay(inv)} style={{fontSize:12,padding:"7px 14px"}}><CreditCard size={12}/>Pay Now</GBtn>
                    )}
                    {inv.status==="paid"&&<span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.green,display:"flex",alignItems:"center",gap:4}}><CheckCircle size={13}/>Paid in Full</span>}
                  </div>
                </div>
              </div>
              {inv.items&&(
                <div style={{marginTop:12,padding:"10px 0",borderTop:`1px solid ${C.border}`}}>
                  {inv.items.map((item,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted,padding:"4px 0"}}>
                      <span>{item.desc}</span><span>{item.qty}× {fmt$(item.rate)} = {fmt$(item.qty*item.rate)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {filtered.length===0&&<div style={{textAlign:"center",padding:40,color:C.muted,fontFamily:"'Playfair Display',serif",fontSize:16,fontStyle:"italic"}}>No {tab} invoices</div>}
      </div>

      {/* Create Invoice Modal */}
      {showAdd&&(
        <Modal title="New Invoice" onClose={()=>setShowAdd(false)} width={520}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <Inp label="Client Name" value={form.client} onChange={e=>upd("client",e.target.value)}/>
            <Inp label="Client Email" value={form.clientEmail} onChange={e=>upd("clientEmail",e.target.value)} type="email"/>
          </div>
          <Inp label="Due Date" value={form.due} onChange={e=>upd("due",e.target.value)} type="date"/>
          <div style={{marginBottom:8}}>
            <label style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:10}}>Line Items</label>
            {form.items.map((item,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 60px 90px",gap:8,marginBottom:8}}>
                <input value={item.desc} onChange={e=>updLine(i,"desc",e.target.value)} placeholder="Description" style={{background:C.card2,border:`1px solid ${C.border2}`,borderRadius:7,padding:"8px 10px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:12,outline:"none"}}/>
                <input value={item.qty}  onChange={e=>updLine(i,"qty",+e.target.value)} type="number" placeholder="Qty" style={{background:C.card2,border:`1px solid ${C.border2}`,borderRadius:7,padding:"8px 10px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:12,outline:"none"}}/>
                <input value={item.rate} onChange={e=>updLine(i,"rate",+e.target.value)} type="number" placeholder="Rate $" style={{background:C.card2,border:`1px solid ${C.border2}`,borderRadius:7,padding:"8px 10px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:12,outline:"none"}}/>
              </div>
            ))}
            <button onClick={addLine} style={{background:"none",border:`1px dashed ${C.border2}`,borderRadius:7,padding:"7px 14px",color:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer",width:"100%",marginBottom:4}}>+ Add Line</button>
          </div>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:C.gold}}>Total: {fmt$(form.items.reduce((a,i)=>a+(i.qty*i.rate),0))}</span>
          </div>
          <GBtn onClick={create} style={{width:"100%"}}>Create Invoice</GBtn>
        </Modal>
      )}

      {/* Payment Modal (Stripe-ready UI) */}
      {showPay&&(
        <Modal title="Secure Payment" onClose={()=>setShowPay(null)} width={440}>
          <div style={{background:C.card2,border:`1px solid ${C.border}`,borderRadius:10,padding:"14px 16px",marginBottom:20}}>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted,marginBottom:4}}>{showPay.number} · {showPay.client}</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.cream}}>{fmt$(invoiceTotal(showPay))}</div>
          </div>
          <div style={{background:`${C.green}08`,border:`1px solid ${C.green}20`,borderRadius:8,padding:"10px 14px",marginBottom:16,display:"flex",gap:8,alignItems:"center"}}>
            <Shield size={13} color={C.green}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>Secured by Stripe · 256-bit SSL encryption</span>
          </div>
          <Inp label="Cardholder Name" value={cardForm.name} onChange={e=>setCardForm(f=>({...f,name:e.target.value}))} placeholder="Celeste Holmes"/>
          <Inp label="Card Number" value={cardForm.number} onChange={e=>setCardForm(f=>({...f,number:e.target.value}))} placeholder="1234 5678 9012 3456"/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <Inp label="Expiry" value={cardForm.exp} onChange={e=>setCardForm(f=>({...f,exp:e.target.value}))} placeholder="MM/YY"/>
            <Inp label="CVV" value={cardForm.cvv} onChange={e=>setCardForm(f=>({...f,cvv:e.target.value}))} placeholder="123"/>
          </div>
          <div style={{background:`${C.blue}08`,border:`1px solid ${C.blue}20`,borderRadius:8,padding:"10px 14px",marginBottom:16,fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted}}>
            <strong style={{color:C.blue}}>Demo Mode:</strong> Connect your Stripe account in Settings to enable live payments. Test card: 4242 4242 4242 4242
          </div>
          <GBtn onClick={()=>markPaid(showPay.id)} style={{width:"100%",padding:"13px"}}><CreditCard size={15}/>Pay {fmt$(invoiceTotal(showPay))}</GBtn>
        </Modal>
      )}
    </div>
  );
};

// ─── PROOF GALLERY ────────────────────────────────────────────────
const Proofs = ({clients}) => {
  const [galleries,setGalleries]=useState(initGalleries);
  const [sel,setSel]=useState(null);
  const [lightbox,setLightbox]=useState(null);
  const [showNew,setShowNew]=useState(false);
  const [nf,setNf]=useState({clientName:"",title:"",watermark:true,locked:true});
  const fileRef=useRef();
  const gallery=galleries.find(g=>g.id===sel);
  const upload=e=>{
    Array.from(e.target.files).forEach(file=>{
      const r=new FileReader();
      r.onload=ev=>setGalleries(gs=>gs.map(g=>g.id===sel?{...g,images:[...g.images,{id:Date.now()+Math.random(),src:ev.target.result,name:file.name,approved:null}]}:g));
      r.readAsDataURL(file);
    });
  };
  const approve=(imgId,val)=>setGalleries(gs=>gs.map(g=>g.id===sel?{...g,images:g.images.map(i=>i.id===imgId?{...i,approved:val}:i)}:g));
  const create=()=>{
    setGalleries(gs=>[...gs,{id:Date.now(),clientId:null,clientName:nf.clientName,title:nf.title,date:new Date().toISOString().slice(0,10),images:[],status:"pending",watermark:nf.watermark,locked:nf.locked}]);
    setShowNew(false); setNf({clientName:"",title:"",watermark:true,locked:true});
  };
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20,flexWrap:"wrap",gap:12}}>
        <H1 sub="Secure client proofing with watermark protection">Proof Gallery</H1>
        {!sel&&<GBtn onClick={()=>setShowNew(true)}><Plus size={14}/>New Gallery</GBtn>}
        {sel&&<GhostBtn onClick={()=>setSel(null)}><X size={13}/>Back</GhostBtn>}
      </div>
      {!sel&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:14}}>
          {galleries.map(g=>(
            <div key={g.id} onClick={()=>setSel(g.id)} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:18,cursor:"pointer"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                <div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,color:C.cream,marginBottom:4}}>{g.title}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{g.clientName} · {g.date}</div>
                </div>
                <Badge label={g.status} color={statusColor(g.status)}/>
              </div>
              <div style={{display:"flex",gap:10,alignItems:"center",marginTop:12}}>
                <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{g.images.length} images</span>
                {g.watermark&&<div style={{display:"flex",gap:4,alignItems:"center"}}><Shield size={11} color={C.blue}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.blue}}>Watermark</span></div>}
                {g.locked&&<div style={{display:"flex",gap:4,alignItems:"center"}}><Lock size={11} color={C.gold}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.gold}}>Protected</span></div>}
              </div>
            </div>
          ))}
        </div>
      )}
      {sel&&gallery&&(
        <div>
          <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"14px 18px",marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
            <div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:C.cream,margin:"0 0 4px"}}>{gallery.title}</h2>
              <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{gallery.clientName} · {gallery.images.length} photos</span>
            </div>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              {gallery.watermark&&<div style={{display:"flex",gap:5,alignItems:"center",padding:"6px 10px",background:`${C.blue}10`,border:`1px solid ${C.blue}25`,borderRadius:7}}><Shield size={13} color={C.blue}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.blue}}>Watermark ON</span></div>}
              {gallery.locked&&<div style={{display:"flex",gap:5,alignItems:"center",padding:"6px 10px",background:`${C.gold}10`,border:`1px solid ${C.gold}25`,borderRadius:7}}><Lock size={13} color={C.gold}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.gold}}>Print-locked</span></div>}
              <GBtn onClick={()=>fileRef.current.click()} style={{padding:"8px 14px",fontSize:12}}><Upload size={13}/>Upload</GBtn>
              <input ref={fileRef} type="file" accept="image/*" multiple onChange={upload} style={{display:"none"}}/>
            </div>
          </div>
          {gallery.images.length===0?(
            <div style={{background:C.card,border:`2px dashed ${C.border2}`,borderRadius:14,padding:48,textAlign:"center"}}>
              <Upload size={30} color={C.muted2} style={{margin:"0 auto 12px",display:"block"}}/>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,color:C.muted,fontStyle:"italic"}}>Upload proofs to get started</div>
            </div>
          ):(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))",gap:12}}>
              {gallery.images.map(img=>(
                <div key={img.id} style={{position:"relative",borderRadius:10,overflow:"hidden",border:`2px solid ${img.approved===true?C.green:img.approved===false?C.red:C.border}`,background:C.card2}}>
                  <div onContextMenu={e=>e.preventDefault()} style={{position:"relative",userSelect:"none",cursor:"pointer"}} onClick={()=>setLightbox(img)}>
                    <img src={img.src} alt="" draggable="false" style={{width:"100%",aspectRatio:"4/3",objectFit:"cover",display:"block",pointerEvents:"none"}}/>
                    {gallery.watermark&&<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}>
                      <div style={{transform:"rotate(-35deg)",fontFamily:"'DM Sans',sans-serif",fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.35)",letterSpacing:"0.12em",textTransform:"uppercase",whiteSpace:"nowrap"}}>PROOF — {BRAND}</div>
                    </div>}
                    <div style={{position:"absolute",inset:0,background:"transparent"}}/>
                  </div>
                  <div style={{padding:"7px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:90}}>{img.name}</span>
                    <div style={{display:"flex",gap:4}}>
                      <button onClick={()=>approve(img.id,true)}  style={{width:22,height:22,borderRadius:5,border:`1px solid ${img.approved===true?C.green:C.border2}`,background:img.approved===true?`${C.green}20`:"transparent",color:img.approved===true?C.green:C.muted,fontSize:11,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✓</button>
                      <button onClick={()=>approve(img.id,false)} style={{width:22,height:22,borderRadius:5,border:`1px solid ${img.approved===false?C.red:C.border2}`,background:img.approved===false?`${C.red}20`:"transparent",color:img.approved===false?C.red:C.muted,fontSize:11,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✗</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {lightbox&&(
        <div onContextMenu={e=>e.preventDefault()} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.95)",zIndex:600,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setLightbox(null)}>
          <button onClick={()=>setLightbox(null)} style={{position:"absolute",top:20,right:20,background:"none",border:"none",cursor:"pointer",color:C.muted}}><X size={22}/></button>
          <div style={{position:"relative",maxWidth:"85vw",maxHeight:"85vh"}} onClick={e=>e.stopPropagation()}>
            <img src={lightbox.src} draggable="false" alt="" style={{maxWidth:"85vw",maxHeight:"85vh",objectFit:"contain",display:"block",pointerEvents:"none",userSelect:"none"}}/>
            {gallery?.watermark&&<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}><div style={{transform:"rotate(-35deg)",fontFamily:"'DM Sans',sans-serif",fontSize:20,fontWeight:700,color:"rgba(255,255,255,0.3)",letterSpacing:"0.2em",textTransform:"uppercase",whiteSpace:"nowrap"}}>PROOF — {BRAND}</div></div>}
            <div style={{position:"absolute",inset:0,background:"transparent"}}/>
          </div>
          <div style={{position:"absolute",bottom:18,fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted2,display:"flex",gap:5,alignItems:"center"}}><Shield size={11}/>Protected proof · right-click & save disabled</div>
        </div>
      )}
      {showNew&&(
        <Modal title="New Proof Gallery" onClose={()=>setShowNew(false)}>
          <Inp label="Gallery Title"  value={nf.title}      onChange={e=>setNf(f=>({...f,title:e.target.value}))}/>
          <Inp label="Client Name"    value={nf.clientName} onChange={e=>setNf(f=>({...f,clientName:e.target.value}))}/>
          <div style={{marginBottom:20}}>
            <label style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:10}}>Security</label>
            {[["watermark","Watermark all proofs",Shield,C.blue],["locked","Disable print & copy",Lock,C.gold]].map(([k,lbl,Icon,col])=>(
              <label key={k} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,cursor:"pointer"}}>
                <div onClick={()=>setNf(f=>({...f,[k]:!f[k]}))} style={{width:36,height:20,borderRadius:10,background:nf[k]?col:C.border2,position:"relative",transition:"background 0.2s",flexShrink:0}}>
                  <div style={{position:"absolute",top:2,left:nf[k]?18:2,width:16,height:16,borderRadius:"50%",background:C.cream,transition:"left 0.2s"}}/>
                </div>
                <Icon size={13} color={nf[k]?col:C.muted}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:nf[k]?col:C.muted}}>{lbl}</span>
              </label>
            ))}
          </div>
          <GBtn onClick={create} style={{width:"100%"}}>Create Gallery</GBtn>
        </Modal>
      )}
    </div>
  );
};

// ─── MARKETING HUB ────────────────────────────────────────────────
const CTYPES=[
  {id:"email",    label:"Email Announcement",icon:Mail,      desc:"Professional client email"},
  {id:"flyer",    label:"Flyer Copy",         icon:FileImage, desc:"Print-ready layout"},
  {id:"instagram",label:"Instagram Caption",  icon:Instagram, desc:"Post with hashtags"},
  {id:"sms",      label:"SMS Blast",          icon:Send,      desc:"Under 160 chars"},
];
const Marketing=({events})=>{
  const [selEv,setSelEv]=useState(events[0]?.id||null);
  const [ct,setCt]=useState("email");
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState("");
  const [copied,setCopied]=useState(false);
  const ev=events.find(e=>e.id===selEv);
  const gen=async()=>{
    if(!ev)return; setLoading(true); setResult("");
    const P={
      email:`Write a professional email for Celeste Holmes Photography LLC (${LOCATION}, ${PHONE}) for: ${ev.title} on ${ev.date} at ${ev.time}, ${ev.location}, $${ev.price}/person. ${ev.description} Include SUBJECT:, greeting, details, booking CTA [BOOKING LINK], professional close.`,
      flyer:`Print-ready flyer for Celeste Holmes Photography (${LOCATION}): ${ev.title}, ${ev.date} ${ev.time}, ${ev.location}, $${ev.price}. ${ev.description} Format: HEADLINE, SUBHEADLINE, KEY DETAILS, BODY, CTA, CONTACT. Luxury editorial.`,
      instagram:`Instagram post for Celeste Holmes Photography (${LOCATION}) event: ${ev.title}, ${ev.date}, $${ev.price}. ${ev.description} Strong opener, details, [LINK IN BIO], 15+ relevant hashtags. Confident luxury tone.`,
      sms:`SMS under 160 chars for Celeste Holmes Photography: ${ev.title} ${ev.date} $${ev.price}. End with [LINK].`,
    };
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,messages:[{role:"user",content:P[ct]}]})});
      const d=await r.json(); setResult(d.content?.map(b=>b.text||"").join("")||"");
    }catch{setResult("Generation failed. Please try again.");}
    setLoading(false);
  };
  const copy=()=>{navigator.clipboard.writeText(result);setCopied(true);setTimeout(()=>setCopied(false),2000);};
  return (
    <div>
      <H1 sub="AI-powered marketing for every event">Marketing Hub</H1>
      <div style={{display:"grid",gridTemplateColumns:"300px 1fr",gap:16}}>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <Card>
            <SectionTitle>Select Event</SectionTitle>
            {events.map(e=>(
              <button key={e.id} onClick={()=>setSelEv(e.id)} style={{display:"block",width:"100%",textAlign:"left",padding:"9px 12px",marginBottom:6,borderRadius:8,border:`1px solid ${selEv===e.id?C.gold:C.border}`,background:selEv===e.id?`${C.gold}10`:"transparent",cursor:"pointer"}}>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:selEv===e.id?C.gold:C.cream,fontWeight:500}}>{e.title}</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted}}>{e.date} · {fmt$(e.price)}</div>
              </button>
            ))}
          </Card>
          <Card>
            <SectionTitle>Content Type</SectionTitle>
            {CTYPES.map(t=>(
              <button key={t.id} onClick={()=>setCt(t.id)} style={{display:"flex",gap:9,alignItems:"flex-start",width:"100%",textAlign:"left",padding:"9px 12px",marginBottom:6,borderRadius:8,border:`1px solid ${ct===t.id?C.gold:C.border}`,background:ct===t.id?`${C.gold}10`:"transparent",cursor:"pointer"}}>
                <t.icon size={13} color={ct===t.id?C.gold:C.muted} style={{marginTop:1}}/>
                <div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:ct===t.id?C.gold:C.cream,fontWeight:500}}>{t.label}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted}}>{t.desc}</div>
                </div>
              </button>
            ))}
          </Card>
          <GBtn onClick={gen} disabled={loading||!ev} style={{opacity:loading?0.7:1}}>
            {loading?<><span style={{display:"inline-block",width:13,height:13,border:"2px solid #07060A",borderTopColor:"transparent",borderRadius:"50%",animation:"spin 0.7s linear infinite"}}/>Generating...</>:<><Zap size={14}/>Generate</>}
          </GBtn>
        </div>
        <Card style={{minHeight:360,display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <SectionTitle>{CTYPES.find(t=>t.id===ct)?.label}</SectionTitle>
            {result&&<button onClick={copy} style={{display:"flex",gap:5,alignItems:"center",padding:"6px 12px",background:copied?`${C.green}15`:C.card2,border:`1px solid ${copied?C.green:C.border2}`,borderRadius:7,color:copied?C.green:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer"}}>{copied?<><Check size={12}/>Copied!</>:<><Copy size={12}/>Copy</>}</button>}
          </div>
          <div style={{flex:1,display:"flex",alignItems:result?"flex-start":"center",justifyContent:result?"flex-start":"center"}}>
            {!result&&!loading&&<div style={{textAlign:"center",color:C.muted,fontFamily:"'Playfair Display',serif",fontSize:15,fontStyle:"italic"}}>Select an event and generate content</div>}
            {loading&&<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10,width:"100%"}}><div style={{width:32,height:32,border:`2px solid ${C.border2}`,borderTopColor:C.gold,borderRadius:"50%",animation:"spin 0.7s linear infinite"}}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted}}>Crafting content...</span></div>}
            {result&&!loading&&<pre style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream,lineHeight:1.75,whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0}}>{result}</pre>}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ─── REVENUE & TAX ────────────────────────────────────────────────
const INCOME_CATS=["Session Fee","Retainer","Licensing","Workshop","Print Sales","Other"];
const EXPENSE_CATS=["Equipment","Software","Props","Travel","Meals","Studio Rental","Marketing","Insurance","Education","Other"];
const Revenue=({income,setIncome,expenses,setExpenses})=>{
  const [tab,setTab]=useState("overview");
  const [showI,setShowI]=useState(false);
  const [showE,setShowE]=useState(false);
  const [iF,setIF]=useState({date:"",client:"",description:"",category:"Session Fee",amount:""});
  const [eF,setEF]=useState({date:"",description:"",category:"Equipment",amount:""});
  const gross=income.reduce((a,i)=>a+i.amount,0);
  const exp=expenses.reduce((a,e)=>a+e.amount,0);
  const net=gross-exp;
  const tax=calcTax(net);
  const catT=(arr,key)=>arr.reduce((acc,i)=>{acc[i[key]]=(acc[i[key]]||0)+i.amount;return acc;},{});
  return (
    <div>
      <H1 sub="Income tracking, expense deductions & IRS estimates">Revenue & Tax</H1>
      <div style={{display:"flex",gap:6,marginBottom:22,flexWrap:"wrap",background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:4,width:"fit-content"}}>
        {["overview","income","expenses","tax"].map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:"7px 15px",borderRadius:7,border:"none",background:tab===t?C.card2:"transparent",color:tab===t?C.cream:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:tab===t?500:400,cursor:"pointer",textTransform:"capitalize"}}>{t}</button>)}
      </div>
      {tab==="overview"&&(
        <div>
          <div style={{display:"flex",gap:12,marginBottom:20,flexWrap:"wrap"}}>
            <StatCard label="Gross Revenue"  value={fmt$(gross)} sub="Total income" color={C.green} icon={ArrowUpRight}/>
            <StatCard label="Expenses"       value={fmt$(exp)}   sub="Deductible"   color={C.accent} icon={ArrowDownRight}/>
            <StatCard label="Net Profit"     value={fmt$(net)}   sub="Taxable base" color={C.gold}   icon={BarChart2}/>
            <StatCard label="Est. Annual Tax" value={fmt$(tax.total)} sub={`${tax.effective.toFixed(1)}% effective`} color={C.red} icon={Receipt}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <Card><SectionTitle>Income by Category</SectionTitle>{Object.entries(catT(income,"category")).map(([c,a])=><div key={c} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.border}`}}><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream}}>{c}</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.green,fontWeight:500}}>{fmt$(a)}</span></div>)}</Card>
            <Card><SectionTitle>Expenses by Category</SectionTitle>{Object.entries(catT(expenses,"category")).map(([c,a])=><div key={c} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${C.border}`}}><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream}}>{c}</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.accent,fontWeight:500}}>{fmt$(a)}</span></div>)}</Card>
          </div>
        </div>
      )}
      {tab==="income"&&(
        <div>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:14}}><GBtn onClick={()=>setShowI(true)}><Plus size={13}/>Add Income</GBtn></div>
          <Card style={{padding:0,overflow:"hidden"}}>
            <table style={{width:"100%",borderCollapse:"collapse"}}>
              <thead><tr style={{borderBottom:`1px solid ${C.border}`}}>{["Date","Client","Description","Category","Amount"].map(h=><th key={h} style={{padding:"12px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",textAlign:"left"}}>{h}</th>)}</tr></thead>
              <tbody>{income.map((i,idx)=><tr key={i.id} style={{borderBottom:`1px solid ${C.border}`,background:idx%2?"transparent":C.card2+"30"}}>
                <td style={{padding:"11px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{i.date}</td>
                <td style={{padding:"11px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream}}>{i.client}</td>
                <td style={{padding:"11px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{i.description}</td>
                <td style={{padding:"11px 16px"}}><Badge label={i.category} color={C.blue}/></td>
                <td style={{padding:"11px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.green,fontWeight:500}}>{fmt$(i.amount)}</td>
              </tr>)}</tbody>
              <tfoot><tr style={{borderTop:`2px solid ${C.border}`}}><td colSpan={4} style={{padding:"12px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase"}}>Total</td><td style={{padding:"12px 16px",fontFamily:"'Playfair Display',serif",fontSize:16,color:C.green}}>{fmt$(gross)}</td></tr></tfoot>
            </table>
          </Card>
          {showI&&<Modal title="Add Income" onClose={()=>setShowI(false)}><Inp label="Date" value={iF.date} onChange={e=>setIF(f=>({...f,date:e.target.value}))} type="date"/><Inp label="Client" value={iF.client} onChange={e=>setIF(f=>({...f,client:e.target.value}))}/><Inp label="Description" value={iF.description} onChange={e=>setIF(f=>({...f,description:e.target.value}))}/><Sel label="Category" value={iF.category} onChange={e=>setIF(f=>({...f,category:e.target.value}))}>{INCOME_CATS.map(c=><option key={c}>{c}</option>)}</Sel><Inp label="Amount ($)" value={iF.amount} onChange={e=>setIF(f=>({...f,amount:e.target.value}))} type="number"/><GBtn onClick={()=>{if(!iF.amount)return;setIncome(a=>[{...iF,id:Date.now(),amount:parseFloat(iF.amount)},...a]);setIF({date:"",client:"",description:"",category:"Session Fee",amount:""});setShowI(false);}} style={{width:"100%"}}>Add</GBtn></Modal>}
        </div>
      )}
      {tab==="expenses"&&(
        <div>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:14}}><GBtn onClick={()=>setShowE(true)}><Plus size={13}/>Add Expense</GBtn></div>
          <Card style={{padding:0,overflow:"hidden"}}>
            <table style={{width:"100%",borderCollapse:"collapse"}}>
              <thead><tr style={{borderBottom:`1px solid ${C.border}`}}>{["Date","Description","Category","Amount"].map(h=><th key={h} style={{padding:"12px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",textAlign:"left"}}>{h}</th>)}</tr></thead>
              <tbody>{expenses.map((e,idx)=><tr key={e.id} style={{borderBottom:`1px solid ${C.border}`,background:idx%2?"transparent":C.card2+"30"}}>
                <td style={{padding:"11px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{e.date}</td>
                <td style={{padding:"11px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream}}>{e.description}</td>
                <td style={{padding:"11px 16px"}}><Badge label={e.category} color={C.accent}/></td>
                <td style={{padding:"11px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.accent,fontWeight:500}}>{fmt$(e.amount)}</td>
              </tr>)}</tbody>
              <tfoot><tr style={{borderTop:`2px solid ${C.border}`}}><td colSpan={3} style={{padding:"12px 16px",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase"}}>Total</td><td style={{padding:"12px 16px",fontFamily:"'Playfair Display',serif",fontSize:16,color:C.accent}}>{fmt$(exp)}</td></tr></tfoot>
            </table>
          </Card>
          {showE&&<Modal title="Add Expense" onClose={()=>setShowE(false)}><Inp label="Date" value={eF.date} onChange={e=>setEF(f=>({...f,date:e.target.value}))} type="date"/><Inp label="Description" value={eF.description} onChange={e=>setEF(f=>({...f,description:e.target.value}))}/><Sel label="Category" value={eF.category} onChange={e=>setEF(f=>({...f,category:e.target.value}))}>{EXPENSE_CATS.map(c=><option key={c}>{c}</option>)}</Sel><Inp label="Amount ($)" value={eF.amount} onChange={e=>setEF(f=>({...f,amount:e.target.value}))} type="number"/><GBtn onClick={()=>{if(!eF.amount)return;setExpenses(a=>[{...eF,id:Date.now(),amount:parseFloat(eF.amount)},...a]);setEF({date:"",description:"",category:"Equipment",amount:""});setShowE(false);}} style={{width:"100%"}}>Add</GBtn></Modal>}
        </div>
      )}
      {tab==="tax"&&(
        <div>
          <div style={{background:`${C.red}08`,border:`1px solid ${C.red}20`,borderRadius:10,padding:"12px 16px",marginBottom:18,display:"flex",gap:8,alignItems:"flex-start"}}>
            <Info size={14} color={C.red} style={{marginTop:1,flexShrink:0}}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted,lineHeight:1.6}}>2025 IRS estimates — sole proprietor, single filer, standard deduction ($15,000). Consult a licensed CPA for your actual return.</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:14,marginBottom:22}}>
            {[["Gross Revenue",fmt$(gross),C.green,"Total income"],["Expenses",`−${fmt$(exp)}`,C.accent,"Deductible"],["Net Profit",fmt$(net),C.gold,"Taxable base"],["SE Tax (15.3%)",fmt$(tax.seTax),C.red,"Self-employment"],["Income Tax",fmt$(tax.incomeTax),C.red,"Federal bracket"],["Total Est. Tax",fmt$(tax.total),C.red,"Plan to set aside"]].map(([lbl,val,col,note])=>(
              <div key={lbl} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:"14px 16px"}}>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8}}>{lbl}</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:col,marginBottom:4}}>{val}</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted2}}>{note}</div>
              </div>
            ))}
          </div>
          <SectionTitle>Quarterly IRS Estimated Payments (Form 1040-ES)</SectionTitle>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:14}}>
            {QUARTERS.map(q=>{
              const qi=income.filter(i=>{const m=new Date(i.date).getMonth()+1;return q.months.includes(m);}).reduce((a,i)=>a+i.amount,0);
              const qe=expenses.filter(e=>{const m=new Date(e.date).getMonth()+1;return q.months.includes(m);}).reduce((a,e)=>a+e.amount,0);
              const {total:qt}=calcTax(qi-qe);
              return (
                <div key={q.q} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"15px 16px"}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:C.cream,marginBottom:6}}>{q.q}</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:C.gold,marginBottom:4}}>{fmt$(qt)}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted}}>Due {q.due}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted2,marginTop:2}}>{fmt$(qi)} in · {fmt$(qe)} out</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── AI ASSISTANT ─────────────────────────────────────────────────
const AI=({msgs:inboxMsgs,setMsgs:setInbox})=>{
  const [chat,setChat]=useState([{role:"assistant",content:`Hi Celeste! 👋 I'm your AI studio assistant for ${BRAND}. I can help you draft client emails, create contracts, analyze your finances, suggest marketing copy, answer questions about bookings, and much more. What do you need today?`}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const [tab,setTab]=useState("chat");
  const ref=useRef(null);
  useEffect(()=>{ref.current?.scrollTo(0,ref.current.scrollHeight);},[chat]);
  const send=async()=>{
    if(!input.trim())return;
    const userMsg={role:"user",content:input};
    setChat(c=>[...c,userMsg]); setInput(""); setLoading(true);
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        model:"claude-sonnet-4-20250514",max_tokens:1000,
        system:`You are an AI business assistant for ${BRAND}, a professional photography studio in ${LOCATION} run by Celeste Holmes. Phone: ${PHONE}. Website: ${WEBSITE}. Specialties: weddings, portraits, events, still life, commercial, landscapes — 15+ years experience. Help draft emails, contracts, marketing copy, provide business advice, analyze finances, and support studio operations. Be warm, professional, and concise.`,
        messages:[...chat,userMsg].map(m=>({role:m.role,content:m.content}))
      })});
      const d=await r.json();
      setChat(c=>[...c,{role:"assistant",content:d.content?.map(b=>b.text||"").join("")||"Sorry, I couldn't respond. Please try again."}]);
    }catch{setChat(c=>[...c,{role:"assistant",content:"Connection error. Please try again."}]);}
    setLoading(false);
  };
  const markRead=(id)=>setInbox(ms=>ms.map(m=>m.id===id?{...m,read:true}:m));
  const unread=inboxMsgs.filter(m=>!m.read).length;
  return (
    <div>
      <H1 sub="AI-powered studio assistant + client inbox">AI Assistant</H1>
      <div style={{display:"flex",gap:8,marginBottom:16,background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:4,width:"fit-content"}}>
        <button onClick={()=>setTab("chat")} style={{padding:"7px 16px",borderRadius:7,border:"none",background:tab==="chat"?C.card2:"transparent",color:tab==="chat"?C.cream:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:tab==="chat"?500:400,cursor:"pointer"}}>AI Chat</button>
        <button onClick={()=>setTab("inbox")} style={{display:"flex",alignItems:"center",gap:6,padding:"7px 16px",borderRadius:7,border:"none",background:tab==="inbox"?C.card2:"transparent",color:tab==="inbox"?C.cream:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:tab==="inbox"?500:400,cursor:"pointer"}}>Inbox {unread>0&&<span style={{background:C.red,color:"#fff",borderRadius:"50%",width:16,height:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10}}>{unread}</span>}</button>
      </div>
      {tab==="chat"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 280px",gap:16,alignItems:"start"}}>
          <Card style={{display:"flex",flexDirection:"column",height:520,padding:0,overflow:"hidden"}}>
            <div ref={ref} style={{flex:1,overflowY:"auto",padding:20,display:"flex",flexDirection:"column",gap:14}}>
              {chat.map((m,i)=>(
                <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
                  <div style={{maxWidth:"80%",padding:"10px 14px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",background:m.role==="user"?`linear-gradient(135deg,${C.gold},${C.goldD})`:C.card2,color:m.role==="user"?"#07060A":C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,lineHeight:1.65,whiteSpace:"pre-wrap"}}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading&&<div style={{display:"flex",justifyContent:"flex-start"}}><div style={{padding:"10px 14px",borderRadius:"14px 14px 14px 4px",background:C.card2,color:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:13}}>Thinking…</div></div>}
            </div>
            <div style={{padding:"12px 16px",borderTop:`1px solid ${C.border}`,display:"flex",gap:10}}>
              <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()} placeholder="Ask me anything about your studio..." style={{flex:1,background:C.card2,border:`1px solid ${C.border2}`,borderRadius:8,padding:"10px 12px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none"}}/>
              <GBtn onClick={send} disabled={loading||!input.trim()} style={{padding:"10px 14px",opacity:loading?0.6:1}}><Send size={14}/></GBtn>
            </div>
          </Card>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            <Card><SectionTitle>Quick Prompts</SectionTitle>
              {["Draft a booking confirmation email","Write a contract for a wedding shoot","Suggest a pricing structure for mini sessions","What should I charge for commercial shoots?","Generate a follow-up after delivery","Write an Instagram bio for my studio"].map(p=>(
                <button key={p} onClick={()=>setInput(p)} style={{display:"block",width:"100%",textAlign:"left",padding:"8px 10px",marginBottom:6,borderRadius:7,border:`1px solid ${C.border}`,background:"transparent",color:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer",lineHeight:1.4}}>{p}</button>
              ))}
            </Card>
          </div>
        </div>
      )}
      {tab==="inbox"&&(
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {inboxMsgs.map(m=>(
            <div key={m.id} onClick={()=>markRead(m.id)} style={{background:C.card,border:`1px solid ${m.read?C.border:C.gold+"50"}`,borderRadius:12,padding:18,cursor:"pointer",position:"relative"}}>
              {!m.read&&<div style={{position:"absolute",top:16,right:16,width:8,height:8,borderRadius:"50%",background:C.gold}}/>}
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:8}}>
                <div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:500,color:C.cream,marginBottom:2}}>{m.from}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{m.email}</div>
                </div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted2}}>{m.date}</div>
              </div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,color:C.cream,marginBottom:6}}>{m.subject}</div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted,lineHeight:1.6}}>{m.body}</div>
              {!m.read&&<div style={{marginTop:10}}><GBtn onClick={(e)=>{e.stopPropagation();setInput(`Draft a reply to: "${m.body.slice(0,80)}..."`);setTab("chat");}} style={{fontSize:11,padding:"6px 12px"}}><MessageSquare size={11}/>Draft Reply with AI</GBtn></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── INTEGRATION/SETTINGS ─────────────────────────────────────────
const Integration=()=>{
  const [copied,setCopied]=useState("");
  const cp=(k,t)=>{navigator.clipboard.writeText(t);setCopied(k);setTimeout(()=>setCopied(""),2000);};
  const bookingWidget=`<!-- Celeste Holmes Photography — Booking Widget -->
<script>
  window.CHPConfig = {
    studio: "${BRAND}",
    phone: "${PHONE}",
    website: "${WEBSITE}",
    portalUrl: "https://your-deploy-url.com/portal"
  };
</script>
<script src="https://your-deploy-url.com/widget.js" async></script>
<div id="chp-booking-widget"></div>`;

  const aiChatWidget=`<!-- Celeste Holmes Photography — AI Chat Widget -->
<script>
  (function(){
    var s=document.createElement('script');
    s.src='https://your-deploy-url.com/chat-widget.js';
    s.async=true; document.head.appendChild(s);
  })();
</script>`;

  const portalButton=`<!-- Client Portal Button — Add to your website nav -->
<a href="https://your-deploy-url.com/portal"
   style="display:inline-block;padding:12px 24px;background:#C9A96E;color:#07060A;
          font-family:sans-serif;font-size:14px;font-weight:600;border-radius:8px;
          text-decoration:none;">
  Client Portal Login
</a>`;

  const sections=[
    {key:"booking",title:"Booking Widget",desc:`Add a booking form to ${WEBSITE}. Clients can browse sessions and request bookings.`,code:bookingWidget,color:C.blue},
    {key:"chat",title:"AI Chat Widget",desc:"Floating AI assistant bubble for your website. Answers visitor questions 24/7.",code:aiChatWidget,color:C.gold},
    {key:"portal",title:"Client Portal Button",desc:"Link your website nav to the client portal. Clients log in with their access code.",code:portalButton,color:C.green},
  ];

  return (
    <div>
      <H1 sub={`Embed tools to connect this platform with ${WEBSITE}`}>Website Integration</H1>
      <div style={{background:`${C.gold}08`,border:`1px solid ${C.gold}25`,borderRadius:12,padding:"14px 18px",marginBottom:24,display:"flex",gap:10,alignItems:"flex-start"}}>
        <Globe size={15} color={C.gold} style={{marginTop:1,flexShrink:0}}/>
        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,lineHeight:1.6}}>
          <strong style={{color:C.gold}}>Deploy this app first</strong>, then replace <code style={{color:C.goldL,background:C.card2,padding:"1px 5px",borderRadius:4}}>your-deploy-url.com</code> with your actual URL in each snippet below. Paste the HTML into your GoDaddy website's custom HTML blocks.
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {sections.map(({key,title,desc,code,color})=>(
          <Card key={key}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10,flexWrap:"wrap",gap:8}}>
              <div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:500,color:C.cream,marginBottom:4}}>{title}</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{desc}</div>
              </div>
              <button onClick={()=>cp(key,code)} style={{display:"flex",alignItems:"center",gap:5,padding:"7px 12px",background:copied===key?`${C.green}15`:C.card2,border:`1px solid ${copied===key?C.green:C.border2}`,borderRadius:7,color:copied===key?C.green:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer"}}>
                {copied===key?<><Check size={12}/>Copied!</>:<><Copy size={12}/>Copy Code</>}
              </button>
            </div>
            <pre style={{background:C.card2,border:`1px solid ${C.border}`,borderRadius:8,padding:"12px 14px",fontFamily:"'Courier New',monospace",fontSize:11,color:color,lineHeight:1.6,overflowX:"auto",margin:0,whiteSpace:"pre-wrap",wordBreak:"break-all"}}>{code}</pre>
          </Card>
        ))}
        <Card>
          <SectionTitle>Stripe Payment Integration</SectionTitle>
          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,lineHeight:1.7,marginBottom:14}}>
            To enable live payments, add your Stripe keys to your server environment:
          </div>
          <pre style={{background:C.card2,border:`1px solid ${C.border}`,borderRadius:8,padding:"12px 14px",fontFamily:"'Courier New',monospace",fontSize:11,color:C.goldL,lineHeight:1.6,margin:0}}>
{`# .env (server side — never expose publicly)
STRIPE_SECRET_KEY=sk_live_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_here

# Supported payment methods
# ✓ Visa, Mastercard, Amex, Discover
# ✓ Apple Pay, Google Pay
# ✓ ACH Bank Transfer`}
          </pre>
        </Card>
        <Card>
          <SectionTitle>AI Integration (OpenRouter / Claude API)</SectionTitle>
          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,lineHeight:1.7,marginBottom:14}}>
            This app uses Claude (Anthropic) by default. To switch to OpenRouter for GPT-4, Llama, Mistral, or other models:
          </div>
          <pre style={{background:C.card2,border:`1px solid ${C.border}`,borderRadius:8,padding:"12px 14px",fontFamily:"'Courier New',monospace",fontSize:11,color:C.goldL,lineHeight:1.6,margin:0}}>
{`// OpenRouter drop-in replacement
const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  headers: {
    "Authorization": "Bearer YOUR_OPENROUTER_KEY",
    "HTTP-Referer": "${WEBSITE}",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "anthropic/claude-sonnet-4",  // or "meta-llama/llama-3.3-70b-instruct"
    messages: [{ role: "user", content: "..." }]
  })
});`}
          </pre>
        </Card>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// CLIENT PORTAL
// ══════════════════════════════════════════════════════════════════
const CLIENT_NAV=[
  {id:"home",    label:"Home",      icon:Home},
  {id:"proofs",  label:"My Proofs", icon:Image},
  {id:"invoices",label:"Invoices",  icon:Wallet},
  {id:"book",    label:"Book",      icon:Calendar},
];

const ClientPortal=({clients,invoices,galleries,events,onBack})=>{
  const [code,setCode]=useState("");
  const [client,setClient]=useState(null);
  const [view,setView]=useState("home");
  const [loginErr,setLoginErr]=useState("");
  const [lightbox,setLightbox]=useState(null);
  const [showPay,setShowPay]=useState(null);
  const [payDone,setPayDone]=useState(false);
  const [cardForm,setCardForm]=useState({name:"",number:"",exp:"",cvv:""});
  const [bookForm,setBookForm]=useState({event:"",name:"",email:"",phone:"",notes:""});
  const [booked,setBooked]=useState(false);
  const [aiQ,setAiQ]=useState("");
  const [aiA,setAiA]=useState("");
  const [aiLoad,setAiLoad]=useState(false);

  const login=()=>{
    const cl=clients.find(c=>c.accessCode===code.toUpperCase().trim());
    if(cl){setClient(cl);setLoginErr("");}
    else setLoginErr("Invalid access code. Contact your photographer.");
  };
  const myGalleries=galleries.filter(g=>g.clientId===client?.id||(client&&g.clientName===client.name));
  const myInvoices=invoices.filter(i=>client&&(i.client===client.name||i.clientEmail===client.email));
  const totalOwed=myInvoices.filter(i=>i.status!=="paid"&&i.status!=="draft").reduce((a,i)=>a+invoiceTotal(i),0);

  const askAI=async()=>{
    if(!aiQ.trim())return; setAiLoad(true); setAiA("");
    try{
      const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:600,system:`You are a helpful assistant for ${BRAND} clients. Answer questions about photography sessions, packages, proofing, delivery, and studio policies. Be warm and helpful. Studio: ${LOCATION}, ${PHONE}.`,messages:[{role:"user",content:aiQ}]})});
      const d=await r.json(); setAiA(d.content?.map(b=>b.text||"").join("")||"");
    }catch{setAiA("Unable to connect. Please call us at "+PHONE);}
    setAiLoad(false);
  };

  if(!client){
    return (
      <div style={{minHeight:"100vh",background:C.bg,display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
        <div style={{width:"100%",maxWidth:400}}>
          <div style={{textAlign:"center",marginBottom:32}}>
            <div style={{width:56,height:56,background:`linear-gradient(135deg,${C.gold},${C.goldD})`,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>
              <Camera size={24} color="#07060A"/>
            </div>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:26,color:C.cream,margin:"0 0 6px"}}>{BRAND}</h1>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,margin:0}}>Client Portal · {LOCATION}</p>
          </div>
          <Card>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted,textAlign:"center",marginBottom:20,lineHeight:1.6}}>
              Enter your client access code to view your proofs, invoices, and book sessions. Your code was emailed to you when you became a client.
            </div>
            <Inp label="Access Code" value={code} onChange={e=>setCode(e.target.value)} onKeyDown={e=>e.key==="Enter"&&login()} placeholder="e.g. SOF123" style={{textAlign:"center",fontSize:18,letterSpacing:"0.1em",textTransform:"uppercase"}}/>
            {loginErr&&<div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.red,textAlign:"center",marginBottom:12}}>{loginErr}</div>}
            <GBtn onClick={login} style={{width:"100%",padding:"13px"}}>Enter Portal</GBtn>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted2,textAlign:"center",marginTop:14}}>Need help? Call us: <a href={`tel:${PHONE}`} style={{color:C.gold}}>{PHONE}</a></div>
          </Card>
          <button onClick={onBack} style={{display:"flex",alignItems:"center",gap:5,margin:"20px auto 0",background:"none",border:"none",cursor:"pointer",color:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12}}><X size={12}/>Back to Admin</button>
          <div style={{textAlign:"center",marginTop:20}}>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.muted2}}>Demo access codes: SOF123 · DIA456 · AAL789 · LUX012</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight:"100vh",background:C.bg}}>
      {/* Portal Header */}
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:30,height:30,background:`linear-gradient(135deg,${C.gold},${C.goldD})`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"}}><Camera size={14} color="#07060A"/></div>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:14,color:C.cream}}>Celeste Holmes Photography</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:10,color:C.muted}}>Client Portal</div>
          </div>
        </div>
        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted}}>Hi, <span style={{color:C.cream,fontWeight:500}}>{client.name.split(" ")[0]}</span></div>
          <button onClick={()=>setClient(null)} style={{padding:"6px 10px",background:"none",border:`1px solid ${C.border}`,borderRadius:7,color:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:12,cursor:"pointer",display:"flex",gap:4,alignItems:"center"}}><LogOut size={12}/>Sign Out</button>
        </div>
      </div>
      {/* Portal Nav */}
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"0 20px",display:"flex",gap:0}}>
        {CLIENT_NAV.map(({id,label,icon:Icon})=>(
          <button key={id} onClick={()=>setView(id)} style={{display:"flex",alignItems:"center",gap:7,padding:"12px 16px",border:"none",borderBottom:`2px solid ${view===id?C.gold:"transparent"}`,background:"none",color:view===id?C.gold:C.muted,fontFamily:"'DM Sans',sans-serif",fontSize:13,cursor:"pointer",gap:6}}>
            <Icon size={14}/>{label}
          </button>
        ))}
      </div>
      <div style={{padding:"28px 24px",maxWidth:900,margin:"0 auto"}}>
        {/* HOME */}
        {view==="home"&&(
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.cream,marginBottom:4}}>Welcome back, {client.name.split(" ")[0]} ✦</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,marginBottom:24}}>{client.type} client · {client.shoots} sessions</div>
            <div style={{display:"flex",gap:14,marginBottom:24,flexWrap:"wrap"}}>
              <div style={{flex:1,minWidth:160,background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"16px 18px"}}>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:8}}>Total Invested</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.gold}}>{fmt$(client.spent)}</div>
              </div>
              <div style={{flex:1,minWidth:160,background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"16px 18px"}}>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:8}}>Sessions</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.cream}}>{client.shoots}</div>
              </div>
              {totalOwed>0&&(
                <div style={{flex:1,minWidth:160,background:`${C.accent}08`,border:`1px solid ${C.accent}30`,borderRadius:12,padding:"16px 18px"}}>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.accent,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:8}}>Balance Due</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.accent}}>{fmt$(totalOwed)}</div>
                </div>
              )}
            </div>
            {/* AI Chat for clients */}
            <Card>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream,fontWeight:500,marginBottom:4}}>Questions? Ask Our AI Assistant</div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted,marginBottom:14}}>Get instant answers about packages, delivery, prints, and more</div>
              <div style={{display:"flex",gap:10}}>
                <input value={aiQ} onChange={e=>setAiQ(e.target.value)} onKeyDown={e=>e.key==="Enter"&&askAI()} placeholder="e.g. How long until I receive my photos?" style={{flex:1,background:C.card2,border:`1px solid ${C.border2}`,borderRadius:8,padding:"10px 12px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none"}}/>
                <GBtn onClick={askAI} disabled={aiLoad||!aiQ.trim()} style={{padding:"10px 14px",opacity:aiLoad?0.6:1}}>{aiLoad?<span style={{width:14,height:14,border:"2px solid #07060A",borderTopColor:"transparent",borderRadius:"50%",display:"inline-block",animation:"spin 0.7s linear infinite"}}/>:<Send size={14}/>}</GBtn>
              </div>
              {aiA&&<div style={{marginTop:14,padding:"12px 14px",background:C.card2,borderRadius:8,fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.cream,lineHeight:1.65}}>{aiA}</div>}
            </Card>
          </div>
        )}
        {/* PROOFS */}
        {view==="proofs"&&(
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:C.cream,marginBottom:4}}>My Proofs</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,marginBottom:24}}>Click ✓ to approve or ✗ to flag for retouching</div>
            {myGalleries.length===0?(
              <Card style={{textAlign:"center",padding:40}}>
                <Image size={28} color={C.muted2} style={{display:"block",margin:"0 auto 12px"}}/>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,color:C.muted,fontStyle:"italic"}}>No galleries ready yet</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted2,marginTop:6}}>Your photographer will notify you when proofs are ready</div>
              </Card>
            ):myGalleries.map(g=>(
              <div key={g.id} style={{marginBottom:24}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:C.cream,marginBottom:14}}>{g.title} <span style={{fontSize:13,color:C.muted}}>— {g.date}</span></div>
                {g.images.length===0?(
                  <Card style={{textAlign:"center",padding:24}}><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,fontStyle:"italic"}}>Images uploading soon...</div></Card>
                ):(
                  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:12}}>
                    {g.images.map(img=>(
                      <div key={img.id} style={{position:"relative",borderRadius:10,overflow:"hidden",border:`2px solid ${img.approved===true?C.green:img.approved===false?C.red:C.border}`,background:C.card2}}>
                        <div onContextMenu={e=>e.preventDefault()} style={{position:"relative",userSelect:"none",cursor:"pointer"}} onClick={()=>setLightbox({img,g})}>
                          <img src={img.src} alt="" draggable="false" style={{width:"100%",aspectRatio:"4/3",objectFit:"cover",display:"block",pointerEvents:"none"}}/>
                          {g.watermark&&<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}><div style={{transform:"rotate(-35deg)",fontFamily:"'DM Sans',sans-serif",fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.35)",letterSpacing:"0.12em",textTransform:"uppercase",whiteSpace:"nowrap"}}>PROOF — {BRAND}</div></div>}
                          <div style={{position:"absolute",inset:0,background:"transparent"}}/>
                        </div>
                        <div style={{padding:"6px 8px",display:"flex",justifyContent:"center",gap:8}}>
                          <button onClick={()=>{}} style={{flex:1,padding:"6px 0",borderRadius:5,border:`1px solid ${img.approved===true?C.green:C.border2}`,background:img.approved===true?`${C.green}20`:"transparent",color:img.approved===true?C.green:C.muted,fontSize:12,cursor:"pointer"}}>✓ Approve</button>
                          <button onClick={()=>{}} style={{flex:1,padding:"6px 0",borderRadius:5,border:`1px solid ${img.approved===false?C.red:C.border2}`,background:img.approved===false?`${C.red}20`:"transparent",color:img.approved===false?C.red:C.muted,fontSize:12,cursor:"pointer"}}>✗ Retouch</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {lightbox&&(
              <div onContextMenu={e=>e.preventDefault()} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.96)",zIndex:600,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setLightbox(null)}>
                <button onClick={()=>setLightbox(null)} style={{position:"absolute",top:18,right:18,background:"none",border:"none",cursor:"pointer",color:C.muted}}><X size={22}/></button>
                <div style={{position:"relative",maxWidth:"88vw",maxHeight:"88vh"}} onClick={e=>e.stopPropagation()}>
                  <img src={lightbox.img.src} draggable="false" alt="" style={{maxWidth:"88vw",maxHeight:"88vh",objectFit:"contain",display:"block",pointerEvents:"none",userSelect:"none"}}/>
                  {lightbox.g?.watermark&&<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"}}><div style={{transform:"rotate(-35deg)",fontFamily:"'DM Sans',sans-serif",fontSize:22,fontWeight:700,color:"rgba(255,255,255,0.28)",letterSpacing:"0.2em",textTransform:"uppercase",whiteSpace:"nowrap"}}>PROOF — {BRAND}</div></div>}
                  <div style={{position:"absolute",inset:0,background:"transparent"}}/>
                </div>
              </div>
            )}
          </div>
        )}
        {/* INVOICES */}
        {view==="invoices"&&(
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:C.cream,marginBottom:4}}>My Invoices</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,marginBottom:24}}>View and pay your invoices securely online</div>
            {payDone&&<div style={{background:`${C.green}12`,border:`1px solid ${C.green}30`,borderRadius:10,padding:"12px 16px",marginBottom:16,display:"flex",gap:8,alignItems:"center"}}><CheckCircle size={14} color={C.green}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.green}}>Payment received! Thank you, {client.name.split(" ")[0]}.</span></div>}
            {myInvoices.length===0?(
              <Card style={{textAlign:"center",padding:40}}><Wallet size={28} color={C.muted2} style={{display:"block",margin:"0 auto 12px"}}/><div style={{fontFamily:"'Playfair Display',serif",fontSize:16,color:C.muted,fontStyle:"italic"}}>No invoices yet</div></Card>
            ):myInvoices.map(inv=>(
              <div key={inv.id} style={{background:C.card,border:`1px solid ${inv.status==="overdue"?C.red+"40":C.border}`,borderRadius:12,padding:"16px 20px",marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12}}>
                  <div>
                    <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:6}}><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{inv.number}</span><Badge label={inv.status} color={statusColor(inv.status)}/></div>
                    <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>Issued {inv.date} · Due {inv.due}</div>
                    {inv.items&&<div style={{marginTop:8}}>{inv.items.map((item,i)=><div key={i} style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted2,padding:"3px 0"}}>{item.desc} — {fmt$(item.qty*item.rate)}</div>)}</div>}
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:inv.status==="paid"?C.green:C.cream,marginBottom:10}}>{fmt$(invoiceTotal(inv))}</div>
                    {(inv.status==="sent"||inv.status==="overdue")&&<GBtn onClick={()=>setShowPay(inv)} style={{padding:"9px 18px"}}><CreditCard size={13}/>Pay Now</GBtn>}
                    {inv.status==="paid"&&<div style={{display:"flex",alignItems:"center",gap:5,color:C.green,fontFamily:"'DM Sans',sans-serif",fontSize:13}}><CheckCircle size={14}/>Paid</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* BOOK */}
        {view==="book"&&(
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:C.cream,marginBottom:4}}>Book a Session</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted,marginBottom:24}}>Select a session and request your booking</div>
            {booked?(
              <Card style={{textAlign:"center",padding:40}}>
                <CheckCircle size={36} color={C.green} style={{display:"block",margin:"0 auto 16px"}}/>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:C.cream,marginBottom:8}}>Booking Request Sent!</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:C.muted}}>Celeste will confirm your session within 24 hours. Check your email for details.</div>
                <GhostBtn onClick={()=>{setBooked(false);setBookForm({event:"",name:"",email:"",phone:"",notes:""});}} style={{margin:"20px auto 0"}}>Book Another</GhostBtn>
              </Card>
            ):(
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                <div>
                  {events.map(ev=>(
                    <div key={ev.id} onClick={()=>setBookForm(f=>({...f,event:ev.id}))} style={{background:C.card,border:`1px solid ${bookForm.event===ev.id?C.gold:C.border}`,borderRadius:12,padding:16,marginBottom:12,cursor:"pointer"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                        <h3 style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:500,color:C.cream,margin:0}}>{ev.title}</h3>
                        <Badge label={fmt$(ev.price)} color={C.gold}/>
                      </div>
                      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted,marginBottom:4}}>{ev.date} at {ev.time}</div>
                      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>{ev.location}</div>
                      <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted2,marginTop:6}}>{ev.booked}/{ev.capacity} booked</div>
                    </div>
                  ))}
                </div>
                <Card>
                  <Inp label="Full Name" value={bookForm.name} onChange={e=>setBookForm(f=>({...f,name:e.target.value}))} placeholder={client.name}/>
                  <Inp label="Email" value={bookForm.email} onChange={e=>setBookForm(f=>({...f,email:e.target.value}))} placeholder={client.email} type="email"/>
                  <Inp label="Phone" value={bookForm.phone} onChange={e=>setBookForm(f=>({...f,phone:e.target.value}))} placeholder={client.phone}/>
                  <div style={{marginBottom:20}}>
                    <label style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Special Requests</label>
                    <textarea value={bookForm.notes} onChange={e=>setBookForm(f=>({...f,notes:e.target.value}))} rows={3} style={{width:"100%",background:C.card2,border:`1px solid ${C.border2}`,borderRadius:8,padding:"10px 12px",color:C.cream,fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none",resize:"none",boxSizing:"border-box"}}/>
                  </div>
                  <GBtn onClick={()=>{if(!bookForm.event||!bookForm.name)return;setBooked(true);}} style={{width:"100%"}} disabled={!bookForm.event||!bookForm.name}>Request Booking</GBtn>
                  {!bookForm.event&&<div style={{fontFamily:"'DM Sans',sans-serif",fontSize:11,color:C.muted,textAlign:"center",marginTop:8}}>← Select a session first</div>}
                </Card>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Client Payment Modal */}
      {showPay&&(
        <Modal title="Secure Payment" onClose={()=>setShowPay(null)}>
          <div style={{background:C.card2,border:`1px solid ${C.border}`,borderRadius:10,padding:"14px 16px",marginBottom:18}}>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted,marginBottom:4}}>{showPay.number}</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.cream}}>{fmt$(invoiceTotal(showPay))}</div>
          </div>
          <div style={{background:`${C.green}08`,border:`1px solid ${C.green}20`,borderRadius:8,padding:"10px 14px",marginBottom:14,display:"flex",gap:8,alignItems:"center"}}>
            <Shield size={13} color={C.green}/><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:12,color:C.muted}}>Secured by Stripe · 256-bit SSL</span>
          </div>
          <Inp label="Cardholder Name" value={cardForm.name} onChange={e=>setCardForm(f=>({...f,name:e.target.value}))}/>
          <Inp label="Card Number" value={cardForm.number} onChange={e=>setCardForm(f=>({...f,number:e.target.value}))} placeholder="4242 4242 4242 4242"/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <Inp label="Expiry" value={cardForm.exp} onChange={e=>setCardForm(f=>({...f,exp:e.target.value}))} placeholder="MM/YY"/>
            <Inp label="CVV" value={cardForm.cvv} onChange={e=>setCardForm(f=>({...f,cvv:e.target.value}))} placeholder="123"/>
          </div>
          <GBtn onClick={()=>{setPayDone(true);setShowPay(null);}} style={{width:"100%",padding:"13px",marginTop:4}}><CreditCard size={15}/>Pay {fmt$(invoiceTotal(showPay))}</GBtn>
        </Modal>
      )}
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// ROOT APP
// ══════════════════════════════════════════════════════════════════
export default function App() {
  const { isMobile } = useBreak();
  const [mode,setMode]=useState("admin");
  const [view,setView]=useState("dashboard");
  const [clients,setClients]=useState(initClients);
  const [events,setEvents]=useState(initEvents);
  const [income,setIncome]=useState(initIncome);
  const [expenses,setExpenses]=useState(initExpenses);
  const [invoices,setInvoices]=useState(initInvoices);
  const [galleries]=useState(initGalleries);
  const [msgs,setMsgs]=useState(initMessages);

  if(mode==="portal"){
    return (
      <>
        <FontLoader/>
        <ClientPortal clients={clients} invoices={invoices} galleries={galleries} events={events} onBack={()=>setMode("admin")}/>
        <style>{`*{box-sizing:border-box}body{margin:0}`}</style>
      </>
    );
  }

  return (
    <>
      <FontLoader/>
      <div style={{display:"flex",minHeight:"100vh",background:C.bg,color:C.cream}}>
        {!isMobile&&<Sidebar view={view} setView={setView} onPortal={()=>setMode("portal")} msgs={msgs}/>}
        <main style={{marginLeft:isMobile?0:220,flex:1,padding:isMobile?"20px 16px 90px":"32px 32px 60px",maxWidth:isMobile?"100%":`calc(100vw - 220px)`,boxSizing:"border-box",overflowX:"hidden"}}>
          {view==="dashboard" && <Dashboard clients={clients} events={events} income={income} expenses={expenses} invoices={invoices} msgs={msgs} setView={setView}/>}
          {view==="clients"   && <Clients clients={clients} setClients={setClients}/>}
          {view==="events"    && <Events  events={events} setEvents={setEvents}/>}
          {view==="invoices"  && <Invoices invoices={invoices} setInvoices={setInvoices} clients={clients}/>}
          {view==="proofs"    && <Proofs clients={clients}/>}
          {view==="marketing" && <Marketing events={events}/>}
          {view==="revenue"   && <Revenue income={income} setIncome={setIncome} expenses={expenses} setExpenses={setExpenses}/>}
          {view==="ai"        && <AI msgs={msgs} setMsgs={setMsgs}/>}
          {view==="settings"  && <Integration/>}
        </main>
        {isMobile&&<BottomNav view={view} setView={setView} onPortal={()=>setMode("portal")}/>}
      </div>
      <style>{`*{box-sizing:border-box}body{margin:0}@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </>
  );
}
