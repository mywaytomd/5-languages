const language = 'ENG';

const langLowerCase = language.toLowerCase();
switch(langLowerCase) {
    case 'eng':
        console.log('Hello!');
        break;
    case 'esp':
        console.log('¡Hola!');
        break;
    case 'fr':
        console.log('Bonjour!');
        break;
    case 'de':
        console.log('Gutten Tag!');
        break;
    case 'ru':
        console.log('Привет!');
        break;
    default:
        console.log('Language not supported.');
}