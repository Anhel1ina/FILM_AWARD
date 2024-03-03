const EMAIL_VALID_TEST = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
export const letters = `«»\`'"1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;:ASDFGHJKL:;zxcvbnm,./ZXCVBNM<>? абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ—`;

export const isEmailValid = (email: string) => {
    return EMAIL_VALID_TEST.test(email.toLowerCase())
}

export const removeSymbolsFromFact = (text: string) => {
    return text.replace(/<[^>]*>|&[^;]*;/g, '')
}

export const shuffleText = (text: string) => {
    return text
        .split('')
        .map((char) => {
            if (char === ' ') return ' '
            return letters[Math.floor(Math.random() * letters.length)]
        })
        .join('')
}
// - 