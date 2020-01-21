
class Wallet {
constructor(money) {
    let _money = money;

    // Pobieranie aktualnej zawartosci portfela 
    this.getWalletValue = () => _money;

    // Sprawdzenie czy uzytkownik ma odpowiednia ilosc srodkow

    this.checkCanPlay = value => {
        if(_money => value ) return true;
        return false;
    }
{
    this.changeWallet = (value, type ="+") => {
        if( typeof value === "number" && !isNaN(value)){
            if ( type === "+") {
                return _money += value;
            } else if (type ==="-") {
                return _money -= value;
            } else {
                throw new Error ("Nieprawidlowy typ dzialania")
            }

            
        } else {
            console.log(typeof value);
            throw new Error ("nieprawidlowa liczba")
        }
    }
}
}
}



const wallet = new Wallet(200)