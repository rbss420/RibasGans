exports.info = (id, RBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${RBOT}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${RBOT}*
╠════════════════════
║├≽️⚜ *AUTOR* : _RIBASBOT_
║├≽️⚜ *DESIGNER* : _RIBASBOT_
║├≽️⚜ *OWNER* : _RIBASYT_
╠════════════════════
║  *${RBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${RBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY RIBASYT*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}
