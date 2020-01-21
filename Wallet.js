
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
        if( typeof value === "number" && !isNaN(value))
    }
}
}
}



const wallet = new Wallet(200)