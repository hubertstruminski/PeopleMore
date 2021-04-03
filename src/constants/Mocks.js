import { Contact } from "../classes/Contact"
import { Email } from "../classes/Email"
import { PhoneNumber } from "../classes/PhoneNumber"

export const EMAILS = [
  new Email('hubert.struminski@gmail.com', true),
  new Email('beata.nowak@o2.pl', false),
  new Email('jaroslaw@kowalski.com', true),
  new Email('aneta.roszada@gmail.com', false),
  new Email('anita.borek@gmail.com', false)
];

export const PHONE_NUMBERS = [
  new PhoneNumber('+48500034440', true, '+48'),
  new PhoneNumber('+12345678921', false, '+12'),
  new PhoneNumber('+48678123519', false, '+48'),
  new PhoneNumber('+36543789000', true, '+36'),
  new PhoneNumber('+42500034401', false, '+42')
];


export const CONTACTS_DATA = [
  new Contact('Hubert Strumiński', 'Hubert', 'Strumiński', 'AMC TECH', [EMAILS[0]], [PHONE_NUMBERS[0]]),
  new Contact('Beata Nowak', 'Beata', 'Nowak', 'Red&Green', [EMAILS[1]], [PHONE_NUMBERS[1]]),
  new Contact('Jarosław Kowalski', 'Jarosław', 'Kowalski', 'Blue Corporation', [EMAILS[2]], [PHONE_NUMBERS[2]]),
  new Contact('Aneta Roszada', 'Aneta', 'Roszada', 'Green start-up', [EMAILS[3]], [PHONE_NUMBERS[3]]),
  new Contact('Anita Borek', 'Anita', 'Borek', 'Silver lighting', [EMAILS[4]], [PHONE_NUMBERS[4]])
];