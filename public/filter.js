app.get('/', async function (request, response) {
    let vacaturesResponseJSON
  
    const hours = request.query.hours
  
    if (hours === "16" || hours === "32" || hours === "40") {
      const vacaturesResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_agencies?fields=id,title,vacancies.*&filter={%22vacancies%22:{%22hours%22:${hours}}}`)
      vacaturesResponseJSON = await vacaturesResponse.json()
      console.log(`${hours} vacatures `)
    } else {
      const vacaturesResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_agencies?fields=id,title,vacancies.*`)
      vacaturesResponseJSON = await vacaturesResponse.json()
      console.log('Vacatures zonder filters:', vacaturesResponseJSON);
    }
  
    console.log('Hours parameter:', hours);
  
    response.render('vacatures.liquid', {vacatures: vacaturesResponseJSON.data, succes_message: request.query.succes });
  })