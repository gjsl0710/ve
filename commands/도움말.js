const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
const {promptMessage} = require("../lib/functions.js");
const {getMember,formatDate} = require("../lib/functions.js");
const { adminid, prefix, status, Token, maxmoney, minmoney, setmoney } = require('../lib/set.json');

module.exports.run = async (client, message) => {



	let vending = JSON.parse(fs.readFileSync('./data/discordvending.json', 'utf8'));
	let hacklist = JSON.parse(fs.readFileSync('./data/list.json', 'utf8'));
    let hack = JSON.parse(fs.readFileSync('./data/hack.json', 'utf8'));
    let receipt = JSON.parse(fs.readFileSync('./data/receipt.json', 'utf8'));
    let setting = JSON.parse(fs.readFileSync('./data/setting.json', 'utf8'));
	let charge = JSON.parse(fs.readFileSync('./data/charge.json', 'utf8')); 



let sender = message.author;

function makecode(length) {
	var result = '';
	var characters = '가나다라마바사아자차카타파하거너더러머버서어저처커터퍼허기니디리미비시이지치키티피히그느드르므브스으즈츠크트프흐구누두루무부수우주추쿠투푸후고노도로모보소오조초코토포호교뇨됴료묘뵤쇼요죠쵸쿄툐표효겨녀뎌려며벼셔여져쳐켜텨펴혀갸냐댜랴먀샤뱌야쟈챠캬탸퍄햐배재대개새매내애래해캐태채패베제데게세메네에레헤케테체페밥밪받박밧밤반방발밯밬밭밫밮잡잦잗작잣잠잔장잘잫잨잩잧잪각갑갖갇갓감간강갈갛갘같갗갚';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

function makecode2(length) {
	var result = '';
	var characters = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwerfyuiopasdfghjklzxcbm₩!@#%&?^><';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

function makesimembed(title) {
	const mesd = new Discord.MessageEmbed() 
			.setColor("#303136")
			.setTitle("**"+title+"**")
		message.channel.send(mesd);
}

function msgadmin(description){
      	 
	if(setting["server"].admin == null ||setting["server"].admin === ""){
			client.users.cache.get(adminid).send(description);
		return;
	}
	
	client.users.cache.get(adminid).send(description)
	
	var admin1 = setting["server"] .admin;

admin1.split(" ").forEach( admin => {
	
	if(admin === "") return;
	client.users.cache.get(admin).send(description)
	
})

}
        
function makeembed(title, des, color) {
    if(color == "1"){
    const mesd = new Discord.MessageEmbed() 
        		.setColor("#303136")
            	.setTitle("**"+title+"**")
				.setDescription(des);
				
            message.channel.send(mesd);
    }else{
        	const mesd = new Discord.MessageEmbed() 
            	.setColor(color)
            	.setTitle("**"+title+"**")
            	.setDescription(des);
            	 		 	
            message.channel.send(mesd);
        	}
            
        }
	
		if(message.content.startsWith(prefix+"도움말")){	
			if(message.guild === null) return;
			if(!vending[message.author.id]||vending[message.author.id].state === "die") return makeembed("접근하실 수 없습니다.", "가입하지 않았거나 차단된 사용자입니다.", 1);
			if (message.content.length != 4) return;
			var adminidlist10 = setting["server"].admin;
		if (sender.id != adminid && !message.member.roles.cache.some(r =>  r.name === setting["server"].role) && !adminidlist10.includes(sender.id)) {
							const sibal111 = new Discord.MessageEmbed()
							.setColor("#303136")
						.setAuthor(`자판기 봇 도움말`)
						 .setDescription(prefix+"가입 - 회원가입하여 자판기를 이용합니다\n "+prefix+"충전신청 (계좌 or 문상) (금액) - 충전신청입니다.\n "+prefix+"구매 (제품명) (갯수) - 구매합니다.\n "+prefix+"정보 (제품명) - 재고 확인입니다.\n "+prefix+"제품목록 - 제품목록들을 보여줍니다.\n "+prefix+"유저정보 - 자신의 정보를 보여줍니다.")
						.setTimestamp();
					makesimembed("DM으로 도움말을 보냈습니다!")
					client.users.cache.get(sender.id).send(sibal111);
				
			}else{
									const sibal111 = new Discord.MessageEmbed()
							.setColor("#303136")
						.setAuthor(`관리자용 자판기 봇 도움말`)
						.setDescription(prefix+"가입 - 회원가입하여 자판기를 이용합니다\n "+prefix+"충전신청 (계좌 or 문상) (금액) - 충전신청입니다.\n "+prefix+"구매 (제품명) (갯수) - 구매합니다.\n "+prefix+"제품정보 (제품명) - 재고 확인입니다.\n "+prefix+"제품목록 - 제품목록들을 보여줍니다.\n "+prefix+"유저정보 - 자신의 정보를 보여줍니다.")
						.setTimestamp();
					makesimembed("DM으로 도움말을 보냈습니다!")
					client.users.cache.get(sender.id).send(sibal111);
										const sibal1112 = new Discord.MessageEmbed()
							.setColor("#303136")
						.setAuthor(`자판기 봇 도움말`)
						.setDescription(prefix+"재고추가, "+prefix+"제품추가, "+prefix+"충전수락, "+prefix+"충전취소, "+prefix+"제품삭제, "+prefix+"영수증기록 / 삭제, "+prefix+"채널설정, "+prefix+"재고목록, "+prefix+"재고삭제, "+prefix+"블랙추가 / 삭제, "+prefix+"유저목록, "+prefix+"서버설정, "+prefix+"백업 쓰지마, "+prefix+"복원 쓰지마, "+prefix+"전체공지")
						.setTimestamp();
					client.users.cache.get(sender.id).send(sibal1112);
			}
		}

}

module.exports.help = {
    name: "도움말"
}