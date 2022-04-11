export default function cleanSet(set, stringBeginWith) {
  if (stringBeginWith === '' || typeof stringBeginWith !== 'string') return '';

  return [...set].filter((el) => el)
    .filter((item) => item.startsWith(stringBeginWith))
    .map((item) => item.substring(stringBeginWith.length))
    .join('-');
}
