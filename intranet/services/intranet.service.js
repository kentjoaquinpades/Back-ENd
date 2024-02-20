const db=require('../db')

module.exports.getAllIntranet = async ()=>{
    const [rows] = await db.query("SELECT name, date_start, date_due, user_id, id, status, assignee FROM intranet.wp_zpm_tasks")
    return rows;
}

module.exports.getAllIntranetById = async (id)=>{
    const [rows] = await db.query("SELECT name, date_start, date_due, user_id, id, status, assignee FROM intranet.wp_zpm_tasks WHERE id = " + id)
    return rows;
}

