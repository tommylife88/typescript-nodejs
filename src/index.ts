/**
 * `name`でHelloする関数
 * @param name Helloする名前
 * @returns Helloした文字列
 */
function greet(name: string): string {
  return `Hello ${name}!`;
}

const greetMessage = 'World';
console.log(`${greet(greetMessage)}`);
