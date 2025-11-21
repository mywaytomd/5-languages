const language = 'English';

const langLowerCase = language.toLowerCase();
switch(langLowerCase) {
    case 'english':
        console.log('Hello!');
        break;
    case 'spanish':
        console.log('¡Hola!');
        break;
    case 'french':
        console.log('Bonjour!');
        break;
    case 'german':
        console.log('Gutten Tag!');
        break;
    default:
        console.log('Language not supported.');
}