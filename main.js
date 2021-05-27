const str = `
010-2818-0209
thedch0107@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd
`

console.log(str.match(/(?<=@).{1,}/g))