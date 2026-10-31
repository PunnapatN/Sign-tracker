// ===== ตั้งค่าระบบ (Super Admin แก้ไฟล์นี้ไฟล์เดียว) =====
// 1) คัดลอกค่า firebaseConfig จาก Firebase Console > Project settings > Your apps (Web app)
// 2) ใส่ Gmail ของ Super Admin (ต้องตรงกับในไฟล์ firestore.rules)
window.APP_CONFIG = {
  firebase: {
    apiKey: "ใส่ค่า",
    authDomain: "ใส่ค่า.firebaseapp.com",
    projectId: "ใส่ค่า",
    storageBucket: "ใส่ค่า.appspot.com",
    messagingSenderId: "ใส่ค่า",
    appId: "ใส่ค่า"
  },
  superAdmins: ["your.gmail@gmail.com"],
  appName: "ตรวจป้าย Lotus's"
};
