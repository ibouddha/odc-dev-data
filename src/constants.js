let debug = false;
if (process.env.NODE_ENV !== "production") {
   debug = true;
  console.log("Debug mode is on");
}
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
  "bg-red-500/70",
  "bg-blue-500/70",
  "bg-green-500/70",
  "bg-yellow-500/70",
  "bg-purple-500/70",
  "bg-pink-500/70",
  "bg-orange-500/70",
  "bg-cyan-500/70",
  "bg-indigo-500/70",
  "bg-lime-500/70",
  "bg-amber-500/70",
  "bg-fuchsia-500/70",
  "bg-rose-500/70",
  "bg-sky-500/70",
]

export const textColors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-orange-500",
  "text-cyan-500",
  "text-indigo-500",
  "text-lime-500",
  "text-amber-500",
  "text-fuchsia-500",
  "text-rose-500",
  "text-sky-500",
]

export const kdebug =(message) =>{
  if(debug){
    console.log(message)
  }
}