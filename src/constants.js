if (process.env.NODE_ENV !== "production") {
  kdebug("debug mode is on");
}
const debug = true;

export const defaultAvatar = "https://firebasestorage.googleapis.com/v0/b/odc-dev-data.appspot.com/o/students%2Favatars%2Fdefault-person.png?alt=media&token=12f6a80a-395c-4abf-bd8f-c575ea922dbc"

export   const defaultChoice = {
    id: 0,
    firstName: "qui est cette personne",
    lastName: "mystérieuse ?",
    avatar: defaultAvatar,
    active: true,
  };

export const shadows = [
    "shadow-red-500",
    "shadow-blue-500",
    "shadow-green-500",
    "shadow-yellow-500",
    "shadow-purple-500",
    "shadow-pink-500",
    "shadow-orange-500",
    "shadow-cyan-500",
    "shadow-indigo-500",
    "shadow-lime-500",
    "shadow-amber-500",
    "shadow-fuchsia-500",
    "shadow-rose-500",
    "shadow-sky-500",
  
  ]

export const bgColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-lime-500",
  "bg-amber-500",
  "bg-fuchsia-500",
  "bg-rose-500",
  "bg-sky-500",
]

export const kdebug =(message) =>{
  if(debug){
    console.log(message)
  }
}