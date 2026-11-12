const SKL = [
  "React",
  "JavaScript",
  "Python",
  "C++",
  "UI/UX Design",
  "Figma",
  "English",
  "Russian",
  "Graphic Design",
  "Video Editing",
  "Excel",
  "Mathematics",
  "Public Speaking",
  "Digital Marketing",
  "3D Modeling",
];
const T = {
  uz: {
    ov: "Umumiy ko‘rinish",
    ex: "Talabalarni izlash",
    sk: "Mening ko‘nikmalarim",
    mt: "Mosliklar",
    rq: "So‘rovlar",
    ms: "Xabarlar",
    se: "Mashg‘ulotlar",
    wl: "SkillCoin hamyoni",
    rv: "Sharhlar",
    pf: "Profil",
    st: "Sozlamalar",
    nt: "Bildirishnomalar",
    out: "Chiqish",
  },
  ru: {
    ov: "Обзор",
    ex: "Поиск студентов",
    sk: "Мои навыки",
    mt: "Совпадения",
    rq: "Запросы",
    ms: "Сообщения",
    se: "Занятия",
    wl: "Кошелёк SkillCoin",
    rv: "Отзывы",
    pf: "Профиль",
    st: "Настройки",
    nt: "Уведомления",
    out: "Выйти",
  },
  en: {
    ov: "Overview",
    ex: "Explore students",
    sk: "My skills",
    mt: "Matches",
    rq: "Requests",
    ms: "Messages",
    se: "Learning sessions",
    wl: "SkillCoin wallet",
    rv: "Reviews",
    pf: "Profile",
    st: "Settings",
    nt: "Notifications",
    out: "Sign out",
  },
};
const ST = [
  [
    "Dilnoza Karimova",
    "FDTU",
    "Axborot texnologiyalari",
    2,
    ["English", "Public Speaking"],
    ["React", "UI/UX Design"],
    4.9,
    "IELTS va nutq ko‘nikmalari bo‘yicha yordam bera olaman.",
    1,
  ],
  [
    "Jasur Tursunov",
    "TATU",
    "Kompyuter injiniringi",
    3,
    ["Python", "C++"],
    ["English", "Excel"],
    4.7,
    "Algoritmlar va olimpiada masalalari.",
    1,
  ],
  [
    "Madina Yusupova",
    "Samarqand DU",
    "Filologiya",
    2,
    ["English", "Russian"],
    ["React", "Figma"],
    4.8,
    "Tillar menga oson beriladi, dizaynni o‘rganmoqchiman.",
    0,
  ],
  [
    "Bekzod Aliyev",
    "FDTU",
    "Mexanika",
    3,
    ["3D Modeling", "Mathematics"],
    ["JavaScript", "Public Speaking"],
    4.6,
    "Blender va oliy matematika.",
    1,
  ],
  [
    "Aigul Sadykova",
    "AUCA, Bishkek",
    "Dizayn",
    4,
    ["Figma", "UI/UX Design"],
    ["English", "Digital Marketing"],
    4.9,
    "Mobil ilovalar uchun interfeys dizayni.",
    0,
  ],
  [
    "Sardor Rahimov",
    "WIUT",
    "Biznes",
    2,
    ["Digital Marketing", "Excel"],
    ["Python", "Graphic Design"],
    4.5,
    "SMM va jadvallar bilan ishlash.",
    1,
  ],
  [
    "Nigora Ismoilova",
    "FDTU",
    "Iqtisodiyot",
    1,
    ["Excel", "Russian"],
    ["JavaScript", "English"],
    4.4,
    "Birinchi kurs, o‘rganishga ishtiyoqliman.",
    0,
  ],
  [
    "Timur Nazarov",
    "KBTU, Almaty",
    "Informatika",
    3,
    ["JavaScript", "React"],
    ["Video Editing", "Russian"],
    4.8,
    "Frontend loyihalarda 2 yillik tajriba.",
    1,
  ],
  [
    "Malika Ergasheva",
    "Namangan DU",
    "Matematika",
    4,
    ["Mathematics", "Python"],
    ["Graphic Design", "English"],
    4.7,
    "Statistika va ma’lumotlar tahlili.",
    0,
  ],
  [
    "Otabek Qodirov",
    "FDTU",
    "Dizayn",
    2,
    ["Video Editing", "Graphic Design"],
    ["C++", "Mathematics"],
    4.6,
    "Reels va montaj bo‘yicha amaliy darslar.",
    1,
  ],
  [
    "Zarina Abdullaeva",
    "TDYU",
    "Huquq",
    3,
    ["Public Speaking", "Russian"],
    ["Digital Marketing", "Excel"],
    4.9,
    "Munozara klubi sardori.",
    0,
  ],
  [
    "Rustam Mirzaev",
    "INHA",
    "Kompyuter",
    1,
    ["C++", "Python"],
    ["UI/UX Design", "3D Modeling"],
    4.3,
    "Dasturlashni endi boshlayapman.",
    1,
  ],
].map((r, i) => ({
  id: i + 1,
  name: r[0],
  uni: r[1],
  fac: r[2],
  yr: r[3],
  teach: r[4],
  learn: r[5],
  rat: r[6],
  bio: r[7],
  on: r[8],
}));
const D0 = () => ({
  lang: "uz",
  user: null,
  vis: true,
  np: { req: 1, msg: 1, ses: 1 },
  teach: [
    { n: "React", lv: "Ilg‘or", f: "Online", d: "Komponentlar va hooklar" },
    { n: "JavaScript", lv: "Ilg‘or", f: "Ikkalasi", d: "ES6+ va async" },
  ],
  learn: [
    { n: "English", from: "B1", to: "C1", o: "IELTS 6.5" },
    { n: "Figma", from: "Boshlang‘ich", to: "O‘rta", o: "Prototiplar" },
  ],
  req: [
    {
      id: 1,
      s: 1,
      dir: "in",
      o: "English",
      w: "React",
      m: "Salom! React o‘rgatsangiz, men IELTS bo‘yicha yordam beraman.",
      dt: "10-noy",
      st: "pending",
    },
    {
      id: 2,
      s: 3,
      dir: "in",
      o: "English",
      w: "React",
      m: "Hafta oxirida online uchrashsak bo‘ladimi?",
      dt: "9-noy",
      st: "pending",
    },
    {
      id: 3,
      s: 5,
      dir: "out",
      o: "JavaScript",
      w: "Figma",
      m: "Figma asoslarini o‘rgating, JS darslari menden.",
      dt: "8-noy",
      st: "pending",
    },
    {
      id: 4,
      s: 8,
      dir: "out",
      o: "React",
      w: "Video Editing",
      m: "Montaj o‘rganmoqchiman.",
      dt: "5-noy",
      st: "accepted",
    },
    {
      id: 5,
      s: 2,
      dir: "in",
      o: "Python",
      w: "JavaScript",
      m: "Python bilan almashamizmi?",
      dt: "2-noy",
      st: "rejected",
    },
  ],
  msg: {
    1: [
      { me: 0, t: "Salom! So‘rovingizni ko‘rdim.", tm: "10:12" },
      { me: 1, t: "Salom, Dilnoza! Qachon qulay?", tm: "10:15" },
    ],
    3: [{ me: 0, t: "Online uchrashamizmi?", tm: "Kecha" }],
    5: [{ me: 0, t: "Figma bo‘yicha manba yubordim.", tm: "Kecha" }],
    8: [{ me: 1, t: "Montaj darsi uchun rahmat!", tm: "Dush" }],
    2: [{ me: 0, t: "Python uchun vaqtim yo‘q hozir.", tm: "Yak" }],
    10: [{ me: 0, t: "Salom!", tm: "Shan" }],
  },
  unread: { 1: 1, 3: 1, 5: 0, 8: 0, 2: 0, 10: 1 },
  ses: [
    {
      id: 1,
      s: 1,
      k: "React",
      dir: "teach",
      d: 1,
      tm: "18:00",
      f: "Online",
      pl: "Google Meet",
      st: "upcoming",
    },
    {
      id: 2,
      s: 1,
      k: "English",
      dir: "learn",
      d: 3,
      tm: "16:00",
      f: "Offline",
      pl: "FDTU kutubxonasi",
      st: "upcoming",
    },
    {
      id: 3,
      s: 8,
      k: "Video Editing",
      dir: "learn",
      d: -4,
      tm: "19:00",
      f: "Online",
      pl: "Zoom",
      st: "done",
    },
    {
      id: 4,
      s: 3,
      k: "English",
      dir: "learn",
      d: -8,
      tm: "15:00",
      f: "Online",
      pl: "Meet",
      st: "done",
    },
    {
      id: 5,
      s: 2,
      k: "Python",
      dir: "teach",
      d: -2,
      tm: "14:00",
      f: "Offline",
      pl: "TATU",
      st: "cancelled",
    },
    {
      id: 6,
      s: 5,
      k: "Figma",
      dir: "learn",
      d: 2,
      tm: "17:30",
      f: "Online",
      pl: "Zoom",
      st: "proposed",
    },
  ],
  tx: [
    [50, "Boshlang‘ich bonus", "done", "1-noy"],
    [10, "React darsi — Timur", "done", "3-noy"],
    [-10, "Video Editing darsi", "done", "4-noy"],
    [10, "JavaScript darsi — Madina", "done", "5-noy"],
    [-10, "English darsi — Madina", "done", "6-noy"],
    [10, "Profil to‘ldirildi", "done", "6-noy"],
    [10, "React darsi — Rustam", "done", "8-noy"],
    [-10, "Figma darsi — Aigul", "done", "9-noy"],
    [10, "React darsi — Dilnoza", "pending", "Ertaga", 1],
    [-10, "English darsi — Dilnoza", "pending", "3 kundan so‘ng", 2],
  ],
  rev: [
    { s: 8, st: 5, t: "Juda aniq tushuntiradi.", dir: "in", dt: "6-noy" },
    { s: 3, st: 5, t: "Sabrli va tayyorgarlikli.", dir: "in", dt: "5-noy" },
    { s: 2, st: 4, t: "Yaxshi dars, vaqt qisqa.", dir: "in", dt: "3-noy" },
    { s: 5, st: 5, t: "Faol va do‘stona.", dir: "in", dt: "1-noy" },
    {
      s: 8,
      st: 5,
      t: "Montaj darsi foydali bo‘ldi.",
      dir: "out",
      sid: 3,
      dt: "4-noy",
    },
    {
      s: 3,
      st: 5,
      t: "IELTS maslahatlari zo‘r.",
      dir: "out",
      sid: 4,
      dt: "6-noy",
    },
  ],
  nt: [
    { t: "Dilnoza yangi almashuv so‘rovi yubordi", r: 0 },
    { t: "Aigul so‘rovingizni ko‘rib chiqmoqda", r: 0 },
    { t: "Yangi xabar: Madina", r: 0 },
    { t: "Ertaga React darsi bor, 18:00", r: 1 },
    { t: "Sessiya yakunlandi: Video Editing", r: 1 },
    { t: "Yangi sharh oldingiz", r: 1 },
  ],
});
let S;
try {
  S = JSON.parse(localStorage.getItem("ss2")) || D0();
} catch (e) {
  S = D0();
}
const save = () => {
  try {
    localStorage.setItem("ss2", JSON.stringify(S));
  } catch (e) {}
};
const $ = (id) => document.getElementById(id),
  t = (k) => (T[S.lang] || T.uz)[k];
const sid = (i) => ST.find((x) => x.id == i);
const av = (n, z = 40) =>
  `<span class="av" style="width:${z}px;height:${z}px;background:hsl(${
    95 + ([...n].reduce((a, c) => a + c.charCodeAt(0), 0) % 80)
  } 38% 78%);font-size:${z / 2.7}px">${n
    .split(" ")
    .map((x) => x[0])
    .join("")
    .slice(0, 2)}</span>`;
const tags = (a, o) =>
  a.map((x) => `<span class="tag ${o ? "o" : ""}">${x}</span>`).join("");
const comp = (s) => {
  const mt = S.teach.map((x) => x.n),
    ml = S.learn.map((x) => x.n);
  const a = mt.filter((x) => s.learn.includes(x)).length,
    b = ml.filter((x) => s.teach.includes(x)).length;
  return Math.min(98, 32 + a * 28 + b * 28 + Math.round(s.rat));
};
const bal = () =>
  S.tx.filter((x) => x[2] == "done").reduce((a, x) => a + x[0], 0);
const so = (a, v) =>
  a.map((x) => `<option ${x == v ? "selected" : ""}>${x}</option>`).join("");
const PC = () => {
  const u = S.user || {};
  return Math.round(
    ([u.name, u.uni, u.fac, u.yr, u.bio, S.teach.length, S.learn.length].filter(
      Boolean
    ).length /
      7) *
      100
  );
};
const RS = () => {
  const c = {};
  ST.forEach((s) => s.teach.forEach((k) => (c[k] = (c[k] || 0) + 1)));
  return Object.keys(c)
    .filter((k) => !S.learn.some((x) => x.n == k))
    .sort((a, b) => c[b] - c[a])
    .slice(0, 5);
};
const day = (d) => {
  const x = new Date();
  x.setDate(x.getDate() + d);
  return x.toLocaleDateString("uz", { day: "numeric", month: "short" });
};
const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);
const toast = (m) => {
  const e = $("toast");
  e.textContent = m;
  e.style.display = "block";
  clearTimeout(window.tt);
  window.tt = setTimeout(() => (e.style.display = "none"), 2200);
};
const modal = (h, ti) => {
  $(
    "modal"
  ).innerHTML = `<div class="card" role="dialog"><div class="row sp"><h3>${ti}</h3><button class="btn g sm" onclick="X()">✕</button></div>${h}</div>`;
  $("modal").style.display = "flex";
  const f = $("modal").querySelector(
    "input,select,textarea,button.btn:not(.g)"
  );
  f && f.focus();
};
const X = () => ($("modal").style.display = "none");
const conf = (m, fn) => {
  modal(
    `<p>${m}</p><div class="row" style="margin-top:16px"><button class="btn d" onclick="X();(${fn})()">Ha</button><button class="btn g" onclick="X()">Bekor qilish</button></div>`,
    "Tasdiqlang"
  );
};
const opts = (a) => a.map((x) => `<option>${x}</option>`).join("");
const go = (h) => {
  location.hash = h;
};
const NAV = ["ov", "ex", "sk", "mt", "rq", "ms", "se", "wl", "rv", "pf", "st"];
function shell(pg, body) {
  const un = S.nt.filter((n) => !n.r).length,
    pr = S.req.filter((r) => r.dir == "in" && r.st == "pending").length,
    um = Object.values(S.unread).reduce((a, x) => a + x, 0);
  return `<div class="app"><aside><div class="logo"><i></i>SkillSwap</div>${NAV.map(
    (k) =>
      `<a href="#${k}" class="${pg == k ? "on" : ""}">${t(k)}${
        k == "rq" && pr ? `<b>${pr}</b>` : k == "ms" && um ? `<b>${um}</b>` : ""
      }</a>`
  ).join("")}<a onclick="A.out()">${t(
    "out"
  )}</a></aside><main><div class="dem">Demo: barcha ma’lumotlar xayoliy, haqiqiy foydalanuvchilar emas</div><div style="height:16px"></div><div class="hd"><select aria-label="Til" onchange="A.lang(this.value)"><option value="uz">O‘zbekcha</option><option value="ru" ${
    S.lang == "ru" ? "selected" : ""
  }>Русский</option><option value="en" ${
    S.lang == "en" ? "selected" : ""
  }>English</option></select><a class="btn g sm bell" href="#nt">${t("nt")}${
    un ? `<b>${un}</b>` : ""
  }</a><span class="row sm">${av(
    S.user.name,
    28
  )}<b>${bal()} SC</b></span></div>${body}</main></div>`;
}
const A = {
  out() {
    S.user = null;
    save();
    go("home");
  },
  lang(v) {
    S.lang = v;
    save();
    R();
  },
  req(id) {
    if (!S.user) {
      toast("Avval tizimga kiring");
      return go("auth");
    }
    const s = sid(id);
    if (!S.teach.length) {
      toast("Avval o‘rgatadigan ko‘nikma qo‘shing");
      return go("sk");
    }
    modal(
      `<label>Men o‘rgataman</label><select id="ro">${opts(
        S.teach.map((x) => x.n)
      )}</select><label>Men o‘rganmoqchiman</label><select id="rw">${opts(
        s.teach
      )}</select><label>Xabar</label><textarea id="rm" rows="3">Salom, ${
        s.name.split(" ")[0]
      }! Ko‘nikmalarimizni almashamizmi?</textarea><button class="btn" style="margin-top:14px" onclick="A.sendReq(${id})">So‘rov yuborish</button>`,
      "Almashuv so‘rovi"
    );
  },
  sendReq(id) {
    if (S.req.some((r) => r.s == id && r.dir == "out" && r.st == "pending"))
      return toast("Bu talabaga so‘rov allaqachon yuborilgan");
    S.req.unshift({
      id: Date.now(),
      s: id,
      dir: "out",
      o: $("ro").value,
      w: $("rw").value,
      m: $("rm").value,
      dt: "Bugun",
      st: "pending",
    });
    S.nt.unshift({ t: "So‘rov yuborildi: " + sid(id).name, r: 1 });
    save();
    X();
    toast("So‘rov yuborildi");
    window.rt = "out";
    go("rq");
    R();
  },
  rs(id, st) {
    const r = S.req.find((x) => x.id == id);
    r.st = st;
    S.nt.unshift({
      t:
        (st == "accepted" ? "Qabul qilindi: " : "Rad etildi: ") + sid(r.s).name,
      r: 1,
    });
    save();
    toast(st == "accepted" ? "So‘rov qabul qilindi" : "So‘rov rad etildi");
    R();
    if (st == "accepted" && r.dir == "in")
      modal(
        `<p>${
          sid(r.s).name
        } bilan almashuv boshlandi. Birinchi mashg‘ulotni rejalashtiring yoki xabar yozing.</p><div class="row wrap" style="margin-top:14px"><button class="btn" onclick="X();A.newSes(${
          r.s
        },'${
          r.w
        }')">Mashg‘ulot rejalashtirish</button><button class="btn g" onclick="X();cv=${
          r.s
        };go('ms')">Xabar yozish</button></div>`,
        "So‘rov qabul qilindi"
      );
  },
  addSk(k, i) {
    const e = (i >= 0 ? (k == "t" ? S.teach : S.learn)[i] : null) || {};
    modal(
      `<label>Ko‘nikma</label><select id="kn">${so(SKL, e.n)}</select>${
        k == "t"
          ? `<label>Daraja</label><select id="kl">${so(
              ["Boshlang‘ich", "O‘rta", "Ilg‘or"],
              e.lv
            )}</select><label>Format</label><select id="kf">${so(
              ["Online", "Offline", "Ikkalasi"],
              e.f
            )}</select><label>Tavsif</label><input id="kd" value="${
              e.d || ""
            }" placeholder="Nimani o‘rgata olasiz?">`
          : `<label>Hozirgi daraja</label><select id="kl">${so(
              ["A1", "A2", "B1", "B2", "Boshlang‘ich", "O‘rta"],
              e.from
            )}</select><label>Kerakli daraja</label><select id="kf">${so(
              ["B2", "C1", "O‘rta", "Ilg‘or"],
              e.to
            )}</select><label>Maqsad</label><input id="kd" value="${
              e.o || ""
            }" placeholder="Qisqa maqsad">`
      }<button class="btn" style="margin-top:14px" onclick="A.saveSk('${k}',${
        i >= 0 ? i : -1
      })">Saqlash</button>`,
      k == "t" ? "O‘rgatadigan ko‘nikma" : "O‘rganish maqsadi"
    );
  },
  saveSk(k, i) {
    const n = $("kn").value,
      l = $("kl").value,
      f = $("kf").value,
      d = $("kd").value,
      L = k == "t" ? S.teach : S.learn,
      o = k == "t" ? { n, lv: l, f, d } : { n, from: l, to: f, o: d };
    if (i >= 0) L[i] = o;
    else if (L.some((x) => x.n == n))
      return toast("Bu ko‘nikma allaqachon qo‘shilgan");
    else L.push(o);
    save();
    X();
    toast(i >= 0 ? "Yangilandi" : "Qo‘shildi");
    R();
  },
  delSk(k, i) {
    conf(
      "Ko‘nikmani o‘chirasizmi?",
      `()=>{S.${k == "t" ? "teach" : "learn"}.splice(${i},1);save();R()}`
    );
  },
  send(id) {
    const e = $("mi");
    if (!e.value.trim()) return;
    (S.msg[id] = S.msg[id] || []).push({ me: 1, t: e.value, tm: "Hozir" });
    S.unread[id] = 0;
    window.fm = 1;
    save();
    R();
  },
  newSes(p, k) {
    modal(
      `<label>Talaba</label><select id="ss">${ST.map(
        (s) =>
          `<option value="${s.id}" ${s.id == p ? "selected" : ""}>${
            s.name
          }</option>`
      ).join("")}</select><label>Ko‘nikma</label><select id="sk">${so(
        SKL,
        k
      )}</select><label>Rol</label><select id="sd"><option value="teach">Men o‘rgataman</option><option value="learn">Men o‘rganaman</option></select><label>Sana</label><select id="sdy">${[
        0, 1, 2, 3, 4, 5, 6,
      ]
        .map((d) => `<option value="${d}">${day(d)}</option>`)
        .join(
          ""
        )}</select><label>Vaqt</label><input id="stm" type="time" value="17:00"><label>Format</label><select id="sf"><option>Online</option><option>Offline</option></select><label>Joy / havola</label><input id="spl" value="Google Meet"><button class="btn" style="margin-top:14px" onclick="A.saveSes()">Yaratish</button>`,
      "Yangi mashg‘ulot"
    );
  },
  saveSes() {
    const dir = $("sd").value,
      id = Date.now(),
      k = $("sk").value;
    if (dir == "learn" && bal() < 10)
      return toast("SkillCoin yetarli emas: o‘rganish uchun kamida 10 kerak");
    S.ses.push({
      id,
      s: +$("ss").value,
      k,
      dir,
      d: +$("sdy").value,
      tm: $("stm").value,
      f: $("sf").value,
      pl: $("spl").value,
      st: "upcoming",
    });
    S.tx.unshift([
      dir == "teach" ? 10 : -10,
      (dir == "teach" ? "O‘qitish: " : "O‘rganish: ") + k,
      "pending",
      "Rejalashtirilgan",
      id,
    ]);
    save();
    X();
    toast("Mashg‘ulot yaratildi");
    window.st = "upcoming";
    go("se");
    R();
  },
  ses(id, st) {
    const s = S.ses.find((x) => x.id == id);
    s.st = st;
    const p = S.tx.find((x) => x[4] == id && x[2] == "pending"),
      row = [
        s.dir == "teach" ? 10 : -10,
        (s.dir == "teach" ? "O‘qitish: " : "O‘rganish: ") + s.k,
        "pending",
        "Rejalashtirilgan",
        id,
      ];
    if (st == "upcoming" && !p) S.tx.unshift(row);
    if (st == "done") {
      if (p) {
        p[2] = "done";
        p[3] = "Bugun";
      } else {
        row[2] = "done";
        row[3] = "Bugun";
        S.tx.unshift(row);
      }
      S.nt.unshift({ t: "Sessiya yakunlandi: " + s.k, r: 1 });
    }
    if (st == "cancelled" && p) S.tx = S.tx.filter((x) => x !== p);
    save();
    toast(
      st == "done"
        ? "Yakunlandi, SkillCoin yangilandi"
        : st == "upcoming"
        ? "Mashg‘ulot qabul qilindi"
        : "Bekor qilindi"
    );
    R();
  },
  rate(id) {
    const s = S.ses.find((x) => x.id == id);
    modal(
      `<label>Baho</label><select id="rs">${[5, 4, 3, 2, 1]
        .map((n) => `<option value="${n}">${stars(n)}</option>`)
        .join(
          ""
        )}</select><label>Sharh</label><textarea id="rt" rows="3"></textarea><button class="btn" style="margin-top:14px" onclick="A.addRev(${
        s.s
      },${id})">Yuborish</button>`,
      "Sherikni baholang"
    );
  },
  addRev(s, q) {
    S.rev.unshift({
      s,
      sid: q,
      st: +$("rs").value,
      t: $("rt").value || "—",
      dir: "out",
      dt: "Bugun",
    });
    save();
    X();
    toast("Sharh qo‘shildi");
    go("rv");
  },
  readAll() {
    S.nt.forEach((n) => (n.r = 1));
    save();
    R();
  },
  dem(id) {
    const r = S.req.find((x) => x.id == id);
    r.st = "accepted";
    S.nt.unshift({ t: sid(r.s).name + " so‘rovingizni qabul qildi", r: 0 });
    save();
    toast("Demo: so‘rov qabul qilindi");
    R();
  },
  cancelReq(id) {
    conf(
      "So‘rovni bekor qilasizmi?",
      `()=>{S.req=S.req.filter(x=>x.id!=${id});save();R()}`
    );
  },
  reset() {
    conf(
      "Demo ma’lumotlarini boshlang‘ich holatga qaytarasizmi?",
      `()=>{S=D0();S.user={name:'Abdulatif Kimsanaliev',uni:'FDTU',fac:'Axborot texnologiyalari',yr:'1',bio:'',fmt:'Online'};save();R()}`
    );
  },
  auth(m) {
    const mode = m || "in";
    window.am = mode;
    R();
  },
  login(e, demo) {
    const em = $("em") && $("em").value,
      pw = $("pw") && $("pw").value,
      er = $("er");
    if (!demo && window.am != "forgot") {
      if (!/^\S+@\S+\.\S+$/.test(em || ""))
        return (er.textContent = "Email noto‘g‘ri kiritildi");
      if ((pw || "").length < 6)
        return (er.textContent = "Parol kamida 6 belgidan iborat bo‘lsin");
    }
    if (window.am == "forgot" && !demo) {
      toast("Demo: tiklash havolasi yuborilgan deb hisoblang");
      return A.auth("in");
    }
    if (window.am == "up" && !demo && !$("fn").value.trim())
      return (er.textContent = "Ismingizni kiriting");
    const fresh = window.am == "up" && !demo;
    $("lb").disabled = true;
    $("lb").textContent = "Yuklanmoqda…";
    setTimeout(() => {
      if (fresh) {
        S = D0();
        S.teach = [];
        S.learn = [];
        S.req = [];
        S.ses = [];
        S.msg = {};
        S.unread = {};
        S.rev = [];
        S.tx = [[50, "Boshlang‘ich bonus", "done", "Bugun"]];
        S.nt = [
          {
            t: "SkillSwap’ga xush kelibsiz! Ko‘nikmalaringizni qo‘shing.",
            r: 0,
          },
        ];
      }
      S.user = {
        name: fresh ? $("fn").value.trim() : "Abdulatif Kimsanaliev",
        uni: fresh ? $("un").value : "FDTU",
        fac: fresh ? $("fc").value : "Axborot texnologiyalari",
        yr: fresh ? $("yr").value : "1",
        bio: "",
        fmt: "Online",
      };
      save();
      go(fresh ? "sk" : "ov");
    }, 700);
  },
  saveProf() {
    const n = $("pn").value.trim();
    if (!n) return toast("Ism bo‘sh bo‘lmasin");
    Object.assign(S.user, {
      name: n,
      fac: $("pfc").value,
      yr: $("pyr").value,
      fmt: $("pfm").value,
      bio: $("pb").value,
    });
    save();
    toast("Profil yangilandi");
    R();
  },
  pw() {
    const e = $("pw");
    e.type = e.type == "password" ? "text" : "password";
  },
  saveSt() {
    S.user.name = $("sn").value || S.user.name;
    S.user.fac = $("sf2").value;
    S.vis = $("sv").checked;
    save();
    toast("Saqlandi");
    R();
  },
  pass() {
    const a = $("p1").value,
      b = $("p2").value;
    if (a.length < 6 || a != b)
      return toast("Parollar mos emas yoki juda qisqa");
    toast("Parol yangilandi (demo)");
    $("p1").value = $("p2").value = "";
  },
  thm(v) {
    document.documentElement.dataset.theme = v;
  },
};
const scard = (s) =>
  `<div class="card"><div class="row">${av(s.name, 48)}<div><h3>${
    s.name
  }</h3><p class="mut sm">${s.uni} · ${s.fac}, ${
    s.yr
  }-kurs</p></div></div><p class="sm" style="margin:10px 0">${
    s.bio
  }</p><p class="sm mut">O‘rgatadi</p>${tags(
    s.teach
  )}<p class="sm mut">O‘rganmoqchi</p>${tags(
    s.learn,
    1
  )}<div class="row sp" style="margin-top:10px"><span class="sm">★ ${
    s.rat
  } · <b>${comp(s)}%</b> moslik · ${
    s.on ? "Online" : "Offline"
  }</span></div><div class="row" style="margin-top:12px"><a class="btn g sm" href="#p-${
    s.id
  }">Profil</a><button class="btn sm" onclick="A.req(${
    s.id
  })">So‘rov yuborish</button></div></div>`;
function landing() {
  const f = ST.slice(0, 3);
  return `<div class="dem">Demo prototip: ismlar, raqamlar va sharhlar xayoliy</div><div class="wrapx"><div class="top"><div class="logo"><i></i>SkillSwap</div><nav class="row wrap sm"><a href="#how">Qanday ishlaydi</a><a href="#skills">Ko‘nikmalar</a><a href="#unis">Universitetlar</a></nav><div class="row"><select style="width:auto" onchange="A.lang(this.value)"><option value="uz">O‘zbekcha</option><option value="ru" ${
    S.lang == "ru" ? "selected" : ""
  }>Русский</option><option value="en" ${
    S.lang == "en" ? "selected" : ""
  }>English</option></select><a class="btn g" href="#auth">Kirish</a><a class="btn" href="#auth">Boshlash</a></div></div>
<div class="hero"><div><h1>Bilimingizni ulashing. Yangi ko‘nikmalarni o‘rganing.</h1><p style="margin:16px 0 24px;opacity:.85">Learn together. Teach each other. Talabadan talabaga: siz React o‘rgatasiz, hamkoringiz ingliz tilini. Hamma birgalikda o‘sadi.</p><div class="row wrap"><a class="btn" href="#auth">Bepul boshlash</a><a class="btn g" href="#how">Qanday ishlaydi?</a></div></div>
<div class="card" style="color:var(--t);background:#F5F7F3;--t:#17251F;--t2:#6A786F;--b:#E4EAE4;--h:#DCEBDD"><div class="ex"><div class="row">${av(
    "Abdulatif K",
    44
  )}<div><b>Abdulatif</b><br><span class="sm mut">FDTU</span></div></div><b style="text-align:center">⇄</b><div class="row">${av(
    "Dilnoza Karimova",
    44
  )}<div><b>Dilnoza</b><br><span class="sm mut">FDTU</span></div></div></div><div class="ex" style="margin-top:14px"><div>${tags(
    ["React"]
  )}<p class="sm mut">o‘rgatadi</p></div><span></span><div>${tags([
    "English",
  ])}<p class="sm mut">o‘rgatadi</p></div></div><p class="sm" style="margin-top:12px"><b>Moslik 85%</b> · ikki tomonlama almashuv</p></div></div>
<div class="sec" id="how"><h2>Qanday ishlaydi</h2><div class="grid g3">${[
    "Profil yarating",
    "O‘rgatadigan ko‘nikmalarni qo‘shing",
    "O‘rganmoqchi bo‘lganlarni tanlang",
    "Mos talabalarni toping",
    "Bilim almashishni boshlang",
  ]
    .map((x, i) => `<div class="card"><b>${i + 1}.</b> ${x}</div>`)
    .join("")}</div></div>
<div class="sec" id="skills"><h2>Mashhur ko‘nikmalar</h2>${tags([
    "Dasturlash",
    "Dizayn",
    "Tillar",
    "Marketing",
    "Biznes",
    "Muhandislik",
    "Matematika",
    "Video montaj",
  ])}</div>
<div class="sec"><h2>Talabalar profili (demo)</h2><div class="grid g3">${f
    .map(scard)
    .join("")}</div></div>
<div class="sec"><h2>Platforma raqamlari (namuna)</h2><div class="grid g3"><div class="card stat"><b>12</b>demo profil</div><div class="card stat"><b>15</b>ko‘nikma turi</div><div class="card stat"><b>6</b>universitet</div></div><p class="sm mut" style="margin-top:8px">Bu raqamlar haqiqiy foydalanuvchilar emas, faqat namoyish uchun.</p></div>
<div class="sec" id="unis"><h2>Universitetlar</h2><p class="mut" style="margin-bottom:10px">Pilot: Farg‘ona davlat texnika universiteti (FDTU). Keyingi bosqichda boshqa universitetlar qo‘shiladi.</p>${tags(
    ["FDTU (pilot)", "TATU", "Samarqand DU", "WIUT", "AUCA", "KBTU", "INHA"]
  )}</div>
<div class="sec"><h2>Fikrlar (xayoliy)</h2><div class="grid g2"><div class="card">“Ingliz tilini React evaziga o‘rgandim.”<p class="sm mut" style="margin-top:8px">Demo talaba, FDTU</p></div><div class="card">“SkillCoin tufayli darslarni rejalashtirish oson.”<p class="sm mut" style="margin-top:8px">Demo talaba, TATU</p></div></div></div>
<div class="card row sp wrap" style="background:var(--p);color:var(--on);margin-bottom:30px"><h2>Pilotni FDTU’da boshlang</h2><a class="btn g" style="color:var(--on);border-color:var(--on)" href="#auth">Bepul boshlash</a></div>
<footer class="sm mut" style="padding:20px 0;border-top:1px solid var(--b)">© SkillSwap University Edition · Demo MVP · hello@skillswap.demo</footer></div>`;
}
function auth() {
  const m = window.am || "in",
    su = m == "up";
  return `<div class="wrapx" style="max-width:460px;padding-top:40px"><a href="#home" class="logo"><i></i>SkillSwap</a><div class="card" style="margin-top:20px"><h2>${
    m == "in" ? "Kirish" : su ? "Ro‘yxatdan o‘tish" : "Parolni tiklash"
  }</h2>${
    su
      ? `<label>To‘liq ism</label><input id="fn" value=""><label>Universitet</label><select id="un">${opts(
          ["FDTU", "TATU", "Samarqand DU", "WIUT", "AUCA"]
        )}</select><label>Fakultet</label><input id="fc" value="Axborot texnologiyalari"><label>O‘quv yili</label><select id="yr">${[
          1, 2, 3, 4,
        ]
          .map((x) => `<option>${x}</option>`)
          .join("")}</select>`
      : ""
  }<label>Email</label><input id="em" type="email" placeholder="ism@fdtu.uz">${
    m == "forgot"
      ? ""
      : `<label>Parol</label><div class="row"><input id="pw" type="password"><button class="btn g sm" onclick="A.pw()">Ko‘rsat</button></div>`
  }${
    su
      ? `<p class="sm mut" style="margin-top:8px">Universitet email tasdiqlash — rejalashtirilgan funksiya; demo uchun tasdiqsiz kirish mumkin.</p>`
      : ""
  }<p class="err" id="er" style="margin-top:8px"></p><button class="btn" id="lb" style="width:100%;margin-top:8px" onclick="A.login(event)">${
    m == "forgot" ? "Havola yuborish" : "Davom etish"
  }</button><button class="btn g" style="width:100%;margin-top:8px" onclick="A.login(event,1)">Demo kirish (tasdiqsiz)</button><p class="sm row wrap" style="margin-top:12px"><a onclick="A.auth('in')">Kirish</a><a onclick="A.auth('up')">Ro‘yxatdan o‘tish</a><a onclick="A.auth('forgot')">Parolni unutdim</a></p></div></div>`;
}
function R() {
  const h = location.hash.slice(1) || "home",
    [pg, arg] = h.split("-"),
    ap = $("app"),
    y = window.lh == h ? scrollY : 0;
  window.lh = h;
  document.title = (t(pg) ? t(pg) + " · " : "") + "SkillSwap";
  setTimeout(() => {
    if (!["how", "skills", "unis"].includes(pg)) scrollTo(0, y);
  });
  if (pg == "home") return (ap.innerHTML = landing());
  if (pg == "how" || pg == "skills" || pg == "unis") {
    ap.innerHTML = landing();
    return $(pg).scrollIntoView();
  }
  if (pg == "auth") return (ap.innerHTML = auth());
  if (!S.user) return go("auth");
  const u = S.user,
    me = S.msg;
  let b = "";
  if (pg == "ov") {
    const up = S.ses.filter((x) => x.st == "upcoming"),
      rec = ST.slice()
        .sort((a, c) => comp(c) - comp(a))
        .slice(0, 3),
      pc = PC();
    b = `<div class="bar"><h2>Salom, ${
      u.name.split(" ")[0]
    }!</h2><div class="row"><button class="btn" onclick="go('ex')">Talaba izlash</button><button class="btn g" onclick="A.newSes()">Mashg‘ulot</button></div></div>${
      S.teach.length && S.learn.length
        ? ""
        : `<div class="card row sp wrap" style="margin-bottom:16px;background:var(--h)"><span><b>Profilingizni to‘ldiring.</b> Mos talabalarni topish uchun kamida bitta o‘rgatadigan va bitta o‘rganmoqchi bo‘lgan ko‘nikmani qo‘shing.</span><a class="btn sm" href="#sk">Ko‘nikma qo‘shish</a></div>`
    }<div class="grid g3"><div class="card stat"><b>${bal()}</b>SkillCoin balansi</div><div class="card stat"><b>${
      S.req.filter((r) => r.st == "accepted").length
    }</b>faol moslik</div><div class="card stat"><b>${
      up.length
    }</b>kelgusi mashg‘ulot</div><div class="card"><p class="sm">Profil to‘liqligi ${pc}%</p><div class="bd"><i style="width:${pc}%"></i></div></div></div><div class="grid g2" style="margin-top:16px"><div class="card"><h3>Kelgusi mashg‘ulotlar</h3>${
      up
        .map(
          (x) =>
            `<div class="li"><span>${x.k} · ${
              sid(x.s).name
            }</span><span class="mut sm">${day(x.d)} ${x.tm}</span></div>`
        )
        .join("") || "<p class=mut>Hali yo‘q</p>"
    }</div><div class="card"><h3>So‘nggi xabarlar</h3>${Object.keys(me)
      .slice(0, 3)
      .map((k) => {
        const l = me[k][me[k].length - 1];
        return `<div class="li" style="cursor:pointer" onclick="cv=${k};go('ms')"><span>${
          sid(k).name
        }</span><span class="mut sm">${l.t}</span></div>`;
      })
      .join("")}</div><div class="card"><h3>Tavsiya etilgan talabalar</h3>${rec
      .map(
        (s) =>
          `<div class="li"><span class="row">${av(s.name, 32)}${
            s.name
          }</span><b>${comp(s)}%</b></div>`
      )
      .join("")}</div><div class="card"><h3>So‘nggi faollik</h3>${S.nt
      .slice(0, 4)
      .map((n) => `<div class="li sm">${n.t}</div>`)
      .join(
        ""
      )}</div><div class="card"><h3>Tavsiya etilgan ko‘nikmalar</h3><p class="sm mut" style="margin:4px 0 8px">Ko‘p talabalar o‘rgatadigan yo‘nalishlar</p>${tags(
      RS()
    )}</div></div>`;
  }
  if (pg == "ex") {
    const f = window.F || {};
    const L = ST.filter(
      (s) =>
        (!f.q ||
          (s.name + s.teach + s.learn)
            .toLowerCase()
            .includes(f.q.toLowerCase())) &&
        (!f.u || s.uni == f.u) &&
        (!f.y || s.yr == f.y) &&
        (!f.f || s.fac == f.f) &&
        (!f.k || s.teach.includes(f.k)) &&
        (!f.l || s.learn.includes(f.l)) &&
        (!f.o || s.on)
    ).sort((a, c) => (f.n ? c.id - a.id : comp(c) - comp(a)));
    b = `<div class="bar"><h2>Talabalarni izlash</h2></div><div class="card grid g3" style="margin-bottom:16px"><input placeholder="Ism yoki ko‘nikma" value="${
      f.q || ""
    }" oninput="F.q=this.value;R()" id="q"><select onchange="F.u=this.value;R()"><option value="">Universitet</option>${[
      ...new Set(ST.map((s) => s.uni)),
    ]
      .map((x) => `<option ${f.u == x ? "selected" : ""}>${x}</option>`)
      .join(
        ""
      )}</select><select onchange="F.y=this.value;R()"><option value="">O‘quv yili</option>${[
      1, 2, 3, 4,
    ]
      .map((x) => `<option ${f.y == x ? "selected" : ""}>${x}</option>`)
      .join(
        ""
      )}</select><select onchange="F.f=this.value;R()"><option value="">Fakultet</option>${[
      ...new Set(ST.map((s) => s.fac)),
    ]
      .map((x) => `<option ${f.f == x ? "selected" : ""}>${x}</option>`)
      .join(
        ""
      )}</select><select onchange="F.k=this.value;R()"><option value="">O‘rgatadi</option>${so(
      SKL,
      f.k
    )}</select><select onchange="F.l=this.value;R()"><option value="">O‘rganmoqchi</option>${so(
      SKL,
      f.l
    )}</select><label class="row sm" style="margin:0"><input type="checkbox" style="width:auto" ${
      f.o ? "checked" : ""
    } onchange="F.o=this.checked;R()">Faqat online</label><label class="row sm" style="margin:0"><input type="checkbox" style="width:auto" ${
      f.n ? "checked" : ""
    } onchange="F.n=this.checked;R()">Eng yangilari</label></div><p class="sm mut" style="margin-bottom:12px">${
      L.length
    } ta talaba topildi · <a onclick="F={};R()" style="text-decoration:underline">Filtrlarni tozalash</a></p><div class="grid g2">${
      L.map(scard).join("") ||
      "<div class=card>Hech kim topilmadi. Filtrlarni o‘zgartiring.</div>"
    }</div>`;
    window.F = f;
    setTimeout(() => {
      const q = $("q");
      if (q && f.q) {
        q.focus();
        q.setSelectionRange(99, 99);
      }
    });
  }
  if (pg == "p") {
    const s = sid(arg);
    b = `<a class="sm mut" href="#ex">← Talabalarga qaytish</a><div class="card" style="margin-top:8px"><div class="row wrap">${av(
      s.name,
      72
    )}<div><h2>${s.name}</h2><p class="mut">${s.uni} · ${s.fac}, ${
      s.yr
    }-kurs · ${s.on ? "Online" : "Offline"}</p><p>★ ${s.rat} · ${
      S.ses.filter((x) => x.s == s.id && x.st == "done").length + 12
    } yakunlangan mashg‘ulot</p></div></div><p style="margin:14px 0">${
      s.bio
    }</p><div class="grid g2"><div><h3>O‘rgata oladi</h3>${tags(
      s.teach
    )}</div><div><h3>O‘rganmoqchi</h3>${tags(
      s.learn,
      1
    )}</div><div><h3>Format va vaqt</h3><p class="sm">Online / Offline · Hafta kunlari 17:00–20:00</p></div><div><h3>Sharhlar</h3>${
      S.rev
        .filter((r) => r.s == s.id)
        .map((r) => `<p class="sm">${stars(r.st)} ${r.t}</p>`)
        .join("") || "<p class='sm mut'>Hali sharh yo‘q</p>"
    }</div></div><div class="row" style="margin-top:16px"><button class="btn" onclick="A.req(${
      s.id
    })">So‘rov yuborish</button><button class="btn g" onclick="window.cv=${
      s.id
    };go('ms')">Xabar yozish</button></div></div>`;
  }
  if (pg == "sk") {
    const li = (a, k) =>
      a
        .map(
          (x, i) =>
            `<div class="li"><div><b>${x.n}</b> ${
              k == "t"
                ? tags([x.lv, x.f], 1) + `<p class="sm mut">${x.d || ""}</p>`
                : tags([x.from + " → " + x.to], 1) +
                  `<p class="sm mut">${x.o || ""}</p>`
            }</div><div class="row"><button class="btn g sm" onclick="A.addSk('${k}',${i})">Tahrirlash</button><button class="btn g sm" onclick="A.delSk('${k}',${i})">O‘chirish</button></div></div>`
        )
        .join("") ||
      "<p class=mut>Hali qo‘shilmagan. Birinchi ko‘nikmani qo‘shing.</p>";
    b = `<div class="bar"><h2>Mening ko‘nikmalarim</h2></div><div class="grid g2"><div class="card"><div class="row sp"><h3>O‘rgata oladigan</h3><button class="btn sm" onclick="A.addSk('t')">+ Qo‘shish</button></div>${li(
      S.teach,
      "t"
    )}</div><div class="card"><div class="row sp"><h3>O‘rganmoqchi</h3><button class="btn sm" onclick="A.addSk('l')">+ Qo‘shish</button></div>${li(
      S.learn,
      "l"
    )}</div></div>`;
  }
  if (pg == "mt") {
    if (!S.teach.length || !S.learn.length)
      return (ap.innerHTML = shell(
        "mt",
        `<div class="bar"><h2>Mosliklar</h2></div><div class="card"><p>Mos talabalarni topish uchun kamida bitta o‘rgatadigan va bitta o‘rganmoqchi bo‘lgan ko‘nikma kerak.</p><a class="btn" style="margin-top:12px" href="#sk">Ko‘nikma qo‘shish</a></div>`
      ));
    const L = ST.slice()
      .sort((a, c) => comp(c) - comp(a))
      .slice(0, 8);
    b = `<div class="bar"><h2>Mosliklar</h2></div><p class="mut sm" style="margin-bottom:12px">Moslik foizi ko‘nikmalar kesishuvidan hisoblanadi (sun’iy intellekt emas).</p><div class="grid g2">${L.map(
      (s) => {
        const a = S.teach.map((x) => x.n).filter((x) => s.learn.includes(x)),
          c = S.learn.map((x) => x.n).filter((x) => s.teach.includes(x));
        return `<div class="card"><div class="row sp"><div class="row">${av(
          s.name,
          40
        )}<b>${s.name}</b></div><h2>${comp(
          s
        )}%</h2></div><div class="bd" style="margin:10px 0"><i style="width:${comp(
          s
        )}%"></i></div><p class="sm">Siz o‘rgatasiz: ${tags(
          a.length ? a : ["—"]
        )}</p><p class="sm">Ular o‘rgatadi: ${tags(
          c.length ? c : ["—"]
        )}</p><div class="row wrap" style="margin-top:12px"><button class="btn sm" onclick="A.req(${
          s.id
        })">So‘rov</button><button class="btn g sm" onclick="window.cv=${
          s.id
        };go('ms')">Xabar</button><a class="btn g sm" href="#p-${
          s.id
        }">Batafsil</a>${S.req
          .filter((r) => r.s == s.id && r.dir == "in" && r.st == "pending")
          .map(
            (r) =>
              `<button class="btn sm" onclick="A.rs(${r.id},'accepted')">Qabul qilish</button><button class="btn g sm" onclick="A.rs(${r.id},'rejected')">Rad etish</button>`
          )
          .join("")}</div></div>`;
      }
    ).join("")}</div>`;
  }
  if (pg == "rq") {
    const tb = window.rt || "in",
      L = S.req.filter((r) =>
        tb == "in"
          ? r.dir == "in" && r.st == "pending"
          : tb == "out"
          ? r.dir == "out" && r.st == "pending"
          : r.st == tb
      );
    b = `<div class="bar"><h2>So‘rovlar</h2></div><div class="tabs">${[
      ["in", "Kelgan"],
      ["out", "Yuborilgan"],
      ["accepted", "Qabul qilingan"],
      ["rejected", "Rad etilgan"],
    ]
      .map(
        (x) =>
          `<a class="${tb == x[0] ? "on" : ""}" onclick="rt='${x[0]}';R()">${
            x[1]
          }</a>`
      )
      .join("")}</div><div class="card">${
      L.map((r) => {
        const s = sid(r.s);
        return `<div class="li"><div class="row">${av(s.name)}<div><b>${
          s.name
        }</b> <span class="sm mut">${s.uni} · ${r.dt}</span><p class="sm">${
          r.o
        } ⇄ ${r.w}</p><p class="sm mut">“${r.m}”</p></div></div>${
          r.dir == "in" && r.st == "pending"
            ? `<div class="row"><button class="btn sm" onclick="A.rs(${r.id},'accepted')">Qabul qilish</button><button class="btn g sm" onclick="A.rs(${r.id},'rejected')">Rad etish</button></div>`
            : r.dir == "out" && r.st == "pending"
            ? `<div class="row"><button class="btn g sm" onclick="A.dem(${r.id})">Demo: qabul qildi</button><button class="btn g sm" onclick="A.cancelReq(${r.id})">Bekor qilish</button></div>`
            : r.st == "accepted"
            ? `<div class="row"><button class="btn g sm" onclick="cv=${r.s};go('ms')">Xabar</button><button class="btn sm" onclick="A.newSes(${r.s})">Mashg‘ulot</button></div>`
            : `<span class="tag">${
                r.st == "rejected" ? "rad etilgan" : "kutilmoqda"
              }</span>`
        }</div>`;
      }).join("") ||
      "<p class=mut>Bu bo‘limda so‘rov yo‘q. Talabalarni izlab, birinchi so‘rovni yuboring.</p>"
    }</div>`;
  }
  if (pg == "ms") {
    const ids = Object.keys(me).map(Number);
    if (window.cv && !ids.includes(window.cv)) ids.unshift(window.cv);
    const c = window.cv || ids[0];
    if (!c)
      return (ap.innerHTML = shell(
        "ms",
        `<div class="bar"><h2>Xabarlar</h2></div><div class="card"><p class="mut">Hali suhbat yo‘q. Talaba profilidan “Xabar yozish” tugmasini bosing.</p><a class="btn" style="margin-top:12px" href="#ex">Talabalarni izlash</a></div>`
      ));
    window.cv = c;
    const s = sid(c);
    S.unread[c] = 0;
    b = `<div class="bar"><h2>Xabarlar</h2></div><div class="card chat"><div>${ids
      .map(
        (i) =>
          `<div class="cv ${i == c ? "on" : ""}" onclick="cv=${i};R()">${av(
            sid(i).name,
            34
          )}<div style="flex:1"><b class="sm">${
            sid(i).name
          }</b><br><span class="sm mut">${
            sid(i).on ? "● online" : "offline"
          }</span></div>${S.unread[i] ? "<b>•</b>" : ""}</div>`
      )
      .join(
        ""
      )}</div><div style="display:flex;flex-direction:column;padding:14px"><div class="row sp wrap"><span class="sm mut">${
      s.name
    } · ${s.uni} · ${
      s.fac
    }</span><span class="row"><a class="btn g sm" href="#p-${
      s.id
    }">Profil</a><button class="btn sm" onclick="A.newSes(${
      s.id
    })">Mashg‘ulot</button></span></div><div id="cb" style="flex:1;padding:8px 0;max-height:360px;overflow:auto">${
      (me[c] || [])
        .map(
          (m) =>
            `<div class="bub ${m.me ? "me" : ""}">${
              m.t
            }<br><span class="sm" style="opacity:.6">${m.tm}</span></div>`
        )
        .join("") || "<p class=mut>Suhbatni boshlang.</p>"
    }</div><div class="row"><input id="mi" placeholder="Xabar yozing" onkeydown="if(event.key=='Enter')A.send(${c})"><button class="btn" onclick="A.send(${c})">Yuborish</button></div></div></div>`;
  }
  if (pg == "se") {
    const wk = [0, 1, 2, 3, 4, 5, 6],
      tb = window.st || "upcoming",
      L = S.ses.filter(
        (x) => x.st == tb || (tb == "upcoming" && x.st == "proposed")
      );
    b = `<div class="bar"><h2>Mashg‘ulotlar</h2><button class="btn" onclick="A.newSes()">+ Yangi mashg‘ulot</button></div><div class="card" style="margin-bottom:16px"><h3 style="margin-bottom:10px">Haftalik ko‘rinish</h3><div class="wk">${wk
      .map(
        (d) =>
          `<div><b>${day(d)}</b>${S.ses
            .filter((x) => x.d == d && x.st == "upcoming")
            .map((x) => `<p>${x.tm} ${x.k}</p>`)
            .join("")}</div>`
      )
      .join("")}</div></div><div class="tabs">${[
      ["upcoming", "Kelgusi"],
      ["done", "Yakunlangan"],
      ["cancelled", "Bekor qilingan"],
    ]
      .map(
        (x) =>
          `<a class="${tb == x[0] ? "on" : ""}" onclick="st='${x[0]}';R()">${
            x[1]
          }</a>`
      )
      .join("")}</div><div class="card">${
      L.map(
        (x) =>
          `<div class="li"><div><b>${x.k}</b> · ${
            sid(x.s).name
          }<p class="sm mut">${day(x.d)} ${x.tm} · ${x.f} · ${x.pl} · ${
            x.dir == "teach" ? "Men o‘rgataman" : "Men o‘rganaman"
          }${
            x.st == "proposed" ? " · Taklif qilingan" : ""
          }</p></div><div class="row">${
            x.st == "proposed"
              ? `<button class="btn sm" onclick="A.ses(${x.id},'upcoming')">Qabul qilish</button><button class="btn g sm" onclick="A.ses(${x.id},'cancelled')">Rad etish</button>`
              : x.st == "upcoming"
              ? `<button class="btn sm" onclick="A.ses(${x.id},'done')">Yakunlash</button><button class="btn g sm" onclick="A.ses(${x.id},'cancelled')">Bekor qilish</button>`
              : x.st == "done"
              ? S.rev.some((r) => r.sid == x.id)
                ? `<span class="tag">Baholangan</span>`
                : `<button class="btn g sm" onclick="A.rate(${x.id})">Baholash</button>`
              : ""
          }</div></div>`
      ).join("") || "<p class=mut>Bu yerda mashg‘ulot yo‘q.</p>"
    }</div>`;
  }
  if (pg == "wl") {
    const e = S.tx
        .filter((x) => x[0] > 0 && x[2] == "done")
        .reduce((a, x) => a + x[0], 0),
      sp = -S.tx
        .filter((x) => x[0] < 0 && x[2] == "done")
        .reduce((a, x) => a + x[0], 0);
    b = `<div class="bar"><h2>SkillCoin hamyoni</h2></div><div class="grid g3"><div class="card stat"><b>${bal()}</b>balans</div><div class="card stat"><b>+${e}</b>jami topilgan</div><div class="card stat"><b>−${sp}</b>jami sarflangan</div></div><div class="grid g2" style="margin-top:16px"><div class="card"><h3>Tranzaksiyalar</h3>${S.tx
      .map(
        (x) =>
          `<div class="li"><span>${x[1]}<br><span class="sm mut">${x[3]} · ${
            x[2] == "done" ? "bajarilgan" : "kutilmoqda"
          }</span></span><b>${x[0] > 0 ? "+" : ""}${x[0]}</b></div>`
      )
      .join(
        ""
      )}</div><div class="card"><h3>SkillCoin qanday ishlaydi</h3><p class="sm" style="margin:8px 0">SkillCoin — platformaning ichki balli, haqiqiy pul emas. Qoidalar demo uchun va keyin o‘zgartiriladi.</p><p class="sm"><b>Topish:</b> dars berish +10, profilni to‘ldirish +10.</p><p class="sm"><b>Sarflash:</b> dars olish −10.</p></div></div>`;
  }
  if (pg == "rv") {
    const i = S.rev.filter((r) => r.dir == "in"),
      o = S.rev.filter((r) => r.dir == "out"),
      av2 = (i.reduce((a, r) => a + r.st, 0) / (i.length || 1)).toFixed(1),
      dn = S.ses.filter((x) => x.st == "done");
    b = `<div class="bar"><h2>Sharhlar</h2><div><b style="font-size:24px">★ ${av2}</b> <span class="mut sm">o‘rtacha baho</span></div></div><div class="grid g2"><div class="card"><h3>Olingan</h3>${i
      .map(
        (r) =>
          `<div class="li"><span>${sid(r.s).name}<br><span class="sm mut">${
            r.t
          }</span></span><span>${stars(r.st)}</span></div>`
      )
      .join("")}</div><div class="card"><h3>Berilgan</h3>${o
      .map(
        (r) =>
          `<div class="li"><span>${sid(r.s).name}<br><span class="sm mut">${
            r.t
          }</span></span><span>${stars(r.st)}</span></div>`
      )
      .join("")}<h3 style="margin-top:16px">Baholash kutilmoqda</h3>${
      dn
        .filter((x) => !S.rev.some((r) => r.sid == x.id))
        .map(
          (x) =>
            `<div class="li"><span>${x.k} · ${
              sid(x.s).name
            }</span><button class="btn sm" onclick="A.rate(${
              x.id
            })">Baholash</button></div>`
        )
        .join("") ||
      "<p class='sm mut'>Baholanmagan yakunlangan mashg‘ulot yo‘q.</p>"
    }</div></div>`;
  }
  if (pg == "nt")
    b = `<div class="bar"><h2>Bildirishnomalar</h2><button class="btn g" onclick="A.readAll()">Barchasini o‘qilgan deb belgilash</button></div><div class="card">${S.nt
      .map(
        (n, i) =>
          `<div class="li" style="${
            n.r ? "opacity:.6" : "font-weight:700"
          }" onclick="S.nt[${i}].r=1;save();R()"><span>${n.t}</span>${
            n.r ? "" : "<span class=tag>yangi</span>"
          }</div>`
      )
      .join("")}</div>`;
  if (pg == "st")
    b = `<div class="bar"><h2>Sozlamalar</h2></div><div class="grid g2"><div class="card"><h3>Shaxsiy ma’lumotlar</h3><label>Ism</label><input id="sn" value="${
      u.name
    }"><label>Fakultet</label><input id="sf2" value="${
      u.fac
    }"><label class="row"><input id="sv" type="checkbox" style="width:auto" ${
      S.vis ? "checked" : ""
    }>Profilim boshqalarga ko‘rinsin</label><button class="btn" style="margin-top:12px" onclick="A.saveSt()">Saqlash</button></div><div class="card"><h3>Til va ko‘rinish</h3><label>Til</label><select onchange="A.lang(this.value)"><option value="uz">O‘zbekcha</option><option value="ru" ${
      S.lang == "ru" ? "selected" : ""
    }>Русский</option><option value="en" ${
      S.lang == "en" ? "selected" : ""
    }>English</option></select><label>Mavzu</label><select onchange="A.thm(this.value)"><option value="">Tizim</option><option value="light">Yorug‘</option><option value="dark">Qorong‘i</option></select><h3 style="margin-top:20px">Xavfsizlik</h3><label>Yangi parol</label><input id="p1" type="password"><label>Takrorlang</label><input id="p2" type="password"><button class="btn g" style="margin-top:12px" onclick="A.pass()">Parolni o‘zgartirish</button></div><div class="card"><h3>Bildirishnoma sozlamalari</h3>${[
      ["req", "Yangi so‘rovlar"],
      ["msg", "Yangi xabarlar"],
      ["ses", "Mashg‘ulot eslatmalari"],
    ]
      .map(
        (x) =>
          `<label class="row" style="margin:8px 0"><input type="checkbox" style="width:auto" ${
            S.np[x[0]] ? "checked" : ""
          } onchange="S.np.${x[0]}=this.checked?1:0;save()">${x[1]}</label>`
      )
      .join(
        ""
      )}<h3 style="margin-top:20px">Demo ma’lumotlar</h3><p class="sm mut">Barcha o‘zgarishlarni boshlang‘ich holatga qaytaring.</p><button class="btn g" style="margin-top:8px" onclick="A.reset()">Demoni qayta boshlash</button></div></div>`;
  if (pg == "pf") {
    const dn = S.ses.filter((x) => x.st == "done").length,
      rin = S.rev.filter((r) => r.dir == "in"),
      ra = rin.length
        ? (rin.reduce((a, r) => a + r.st, 0) / rin.length).toFixed(1)
        : "—";
    b = `<div class="bar"><h2>Profil</h2></div><div class="grid g2"><div class="card"><div class="row">${av(
      u.name,
      64
    )}<div><h3>${u.name}</h3><p class="mut sm">${u.uni} · ${u.fac}, ${
      u.yr
    }-kurs</p><p class="sm">★ ${ra} · ${dn} mashg‘ulot yakunlangan</p></div></div><p class="sm" style="margin-top:12px">Profil to‘liqligi ${PC()}%</p><div class="bd"><i style="width:${PC()}%"></i></div><p class="sm" style="margin-top:12px">${
      u.bio || "<span class=mut>Men haqimda matn qo‘shing.</span>"
    }</p><h3 style="margin-top:16px">O‘rgata oladi</h3>${tags(
      S.teach.map((x) => x.n + " · " + x.lv)
    )}${
      S.teach.length ? "" : "<p class='sm mut'>Hali yo‘q</p>"
    }<h3 style="margin-top:12px">O‘rganmoqchi</h3>${tags(
      S.learn.map((x) => x.n),
      1
    )}${
      S.learn.length ? "" : "<p class='sm mut'>Hali yo‘q</p>"
    }<div style="margin-top:12px"><a class="btn g sm" href="#sk">Ko‘nikmalarni boshqarish</a></div></div><div class="card"><h3>Profilni tahrirlash</h3><label>Ism</label><input id="pn" value="${
      u.name
    }"><label>Fakultet</label><input id="pfc" value="${
      u.fac
    }"><label>O‘quv yili</label><select id="pyr">${so(
      [1, 2, 3, 4],
      u.yr
    )}</select><label>Format</label><select id="pfm">${so(
      ["Online", "Offline", "Ikkalasi"],
      u.fmt || "Online"
    )}</select><label>Men haqimda</label><textarea id="pb" rows="3">${
      u.bio || ""
    }</textarea><button class="btn" style="margin-top:12px" onclick="A.saveProf()">Saqlash</button></div></div>`;
  }
  ap.innerHTML = shell(pg, b);
  post(pg);
}
const post = (pg) => {
  document
    .querySelectorAll(
      "[onclick]:not(button):not(input):not(select):not(a[href])"
    )
    .forEach((e) => {
      e.tabIndex = 0;
      e.setAttribute("role", "button");
    });
  if (pg == "ms") {
    const cb = $("cb");
    if (cb) cb.scrollTop = cb.scrollHeight;
    if (window.fm && $("mi")) {
      $("mi").focus();
      window.fm = 0;
    }
  }
};
addEventListener("keydown", (e) => {
  if (e.key == "Escape") X();
  if (
    (e.key == "Enter" || e.key == " ") &&
    e.target.getAttribute &&
    e.target.getAttribute("role") == "button"
  ) {
    e.preventDefault();
    e.target.click();
  }
});
$("modal").addEventListener("click", (e) => {
  if (e.target.id == "modal") X();
});
addEventListener("hashchange", () => {
  X();
  R();
});
R();
