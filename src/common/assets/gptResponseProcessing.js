export const gptResponseProcessing = (text) => {
    return text
        .replaceAll('OpenAI', 'Botanik')
        .replaceAll(/```.{1,}\n/gi, '<code>')
        .replaceAll('```\n', '</code>');
};
