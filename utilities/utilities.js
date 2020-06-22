/* método estático para ser usado sem precisar ser instânciado */
class Utility {
    static dateFormat(date) {

        return date.toLocaleDateString() + " " + date.toLocaleTimeString();

    }
} 