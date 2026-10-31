// ===== ตั้งค่าระบบ (Super Admin แก้ไฟล์นี้ไฟล์เดียว) =====
// 1) คัดลอกค่า firebaseConfig จาก Firebase Console > Project settings > Your apps (Web app)
// 2) ใส่ Gmail ของ Super Admin (ต้องตรงกับในไฟล์ firestore.rules)
window.APP_CONFIG = {
  firebase: {
     apiKey: "AIzaSyAiJzDQO_OVef5VSbj-_VuoNp3FGCXEwho",
  authDomain: "lotus-sign-tracker.firebaseapp.com",
  projectId: "lotus-sign-tracker",
  storageBucket: "lotus-sign-tracker.firebasestorage.app",
  messagingSenderId: "159069199677",
  appId: "1:159069199677:web:257e4fe2d5e0de167cf954"
  },
  superAdmins: ["ppunnapatt@gmail.com"],
  appName: "ตรวจป้าย Lotus's"
};
