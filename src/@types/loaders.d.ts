/** Application asset types */

declare module '*.css' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.module.css' {
  const styles: Record<string, string>
  export default styles
}
