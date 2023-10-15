class FifaCard{
    constructor(pace, shooting, passing, dribbling, defending, physical){
        this.pac = pace
        this.sho = shooting
        this.pas = passing
        this.dri = dribbling        
        this.def = defending
        this.phy = physical
    }
    shoot(){
        alert('SHOOTING BALL')
    }
    block(){
        alert('BLOCKING BALL')
    }
    slidetackle(){
        alert('SLIDE TACKLE')
    }
}

class FifaClubs{
    constructor(name, colors, chant, founded, coach, standings){
        this.nam = name
        this.col = colors
        this.cha = chant
        this.found = founded
        this.coa = coach
        this.stand = standings
    }
    europa(){
        alert('BOOOOO EUROPA')
    }
    championsleague(){
        alert('YAYYYY CHAMPIONS LEAGUE')
    }
    prem(){
        alert('WE ARE GOING TO THE TOP')
    }
}

let Arsenal = new FifaClubs('Arsenal', red, "We All Follow the Arsenal", '1886', 'Mikel Arteta', 2)
let Spurs = new FifaClubs('Spurs', black, 'Glory Glory Tottenham Hotspur', '1886', 'Ange Postecoglou', 1)
let Chelsea = new FifaClubs('Chelsea', blue, 'Keep the Blue Flag Flying High', '1905', 'Mauricio Pochettino', 11)