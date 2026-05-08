
import gökhanOzdemir from '../assets/1635783306921.jfif';
import menekse from '../assets/1772285577703.png';
import jacob from '../assets/1994067c3ac3d40d2341bd81bd13e2e7f755bf0d.png';
import kathryn from '../assets/d5460fde5513fbd696b51c8002961df3af560c0c.png';
import marvin from '../assets/aac6b1b18acee54880feb3c84cfacdb2ff89076d.png';
import floyd from '../assets/5412a2bcc1a0b62fe5e42bf0f9af1ac1d77a35ab.png';
import ronald from '../assets/8cac66edac7e9cc006e377a554341d67f0d9b385.png';
import dianne from '../assets/08e455fe112b5aa889f8276e41832a747a9bda45.png';


const teamMembers = [
  { id: 1, name: "Gökhan Özdemir", role: "Project Manager", img: gökhanOzdemir },
  { id: 2, name: "Menekşe Karadağlı Hasdemir", role: "Full Stack Developer", img: menekse },
  { id: 3, name: "Jacob Jones", role: "Mitsubishi", img: jacob},
  { id: 4, name: "Kathryn Murphy", role: "Mitsubishi", img: kathryn},
  { id: 5, name: "Marvin McKinney", role: "Mitsubishi", img: marvin},
  { id: 6, name: "Floyd Miles", role: "Mitsubishi", img: floyd},
  { id: 7, name: "Ronald Richards", role: "Mitsubishi", img: ronald},
  { id: 8, name: "Dianne Russell", role: "Mitsubishi", img: dianne},
]

export default function TeamPage() {
    return (
        <div className="flex flex-col py-[112px] gap-[112px] items-center ">
        <div className="text-center md:max-w-[600px] max-w-[310px] mx-auto">
            <h2 className="font-bold text-[40px] text[#252B42]">Meet Our Team</h2>
            <p className="font-normal text-[14px] text-[#737373]">Problems trying to resolve the conflict between <br className="hidden md:block" /> the two major realms of Classical physics: Newtonian mechanics </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
           {teamMembers.map((member)=>(
            <div key={member.id} className="flex flex-row items-center gap-[20px]" > 
            <img
            src={member.img} 
            alt={member.name} 
            className="w-[70px] h-[76px] rounded-[75px] object-cover"
            />
            <div className="flex flex-col">
              <h4 className="font-normal text-[20px] text-[#252B42]">{member.name}</h4>
              <p className="font-normal text-[14px] text-[#737373]">{member.role}</p>
            </div>
            </div>
           ))} 
        </div>
        </div>
    )
}