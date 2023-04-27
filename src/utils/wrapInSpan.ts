function wrapInSpan(input: string): string {
  const targetRegex = /\*(.*?)\*/g;
  return input.replace(
    targetRegex,
    "<span class='px-1 bg-[#E0FF70]'>$1</span>"
  );
}

export default wrapInSpan;
