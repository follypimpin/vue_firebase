 const config = {
    apiKey: "AIzaSyAGcuA_mK7t5VwqFeFhM4Np4cQyvlvT7RM",
    authDomain: "develo-vue.firebaseapp.com",
    databaseURL: "https://develo-vue.firebaseio.com",
    projectId: "develo-vue",
    storageBucket: "develo-vue.appspot.com",
    messagingSenderId: "1013582777342",
    appId: "1:1013582777342:web:8a647069610f677a828eaf",
    measurementId: "G-G2CTM3YNTL"
};
firebase.initializeApp(config);
const database = firebase.database();
export{database};
