export const formatDate = (date: Date) => {
    return date.toLocaleString('ru-RU', {
        day: '2-digit',  // День
        month: '2-digit',  // Месяц
        year: 'numeric',  // Год
        hour: '2-digit',  // Час
        minute: '2-digit',  // Минуты
      });
}