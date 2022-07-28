module.exports = employees => {
    for (let i=0; i < employees.length; i++ ) {
        const name = [Object.values(employees[i])[0]]
        const id = [Object.values(employees[i])[1]]
        const email = [Object.values(employees[i])[2]]
        const extra = [Object.keys(employees[i])[3]]
        const extraValue = [Object.values(employees[i])[3]]

        return `
        <div>
        <p>Name: ${name}</p>
        <p>ID: ${id}</p>
        <p>email: <a href="mailto:${email}">${email}</a></p>
        <p>${extra}: ${extraValue}</p>
        </div>
        `
    }
}