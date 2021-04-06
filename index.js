const Discord = require('discord.js'); 
const antinuke = new Discord.Client(); 
const fs = require('fs'); 
const ms = require('ms'); 
const clc = require('cli-color'); 
const config = require('./config.json'); 
const prefix = 'm!';
const keepAlive = require('./server.js');

// Made by Misspoken#1122. Don't skid this shit. :)

antinuke.on("ready", async () => {
    console.clear();
  console.log("███╗░░░███╗██╗░██████╗███████╗██████╗░██╗░░░██╗")
  console.log("████╗░████║██║██╔════╝██╔════╝██╔══██╗╚██╗░██╔╝")
  console.log("██╔████╔██║██║╚█████╗░█████╗░░██████╔╝░╚████╔╝░")
  console.log("██║╚██╔╝██║██║░╚═══██╗██╔══╝░░██╔══██╗░░╚██╔╝░░")
  console.log("██║░╚═╝░██║██║██████╔╝███████╗██║░░██║░░░██║░░░")
  console.log("╚═╝░░░░░╚═╝╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░")
  console.log("———————————————————————————————————————————————")
  console.log("[-] Thanks for using Misery Anti-Nuke!")
  console.log("[-] If you like it, maybe leave a star and follow?")
  console.log("[-] It would help a lot considering I am making more!")
  console.log("[-] This was made by Misspoken so don't skid this shit.")
