import { question_case } from "./constants";
import { TestType, QuestionType, QuestionViewType } from "./models/listTests";
import { formatDate } from "./utils/formatDate";

const questionsAnketa: QuestionType[] = [
    {
      id: 1,
      type: question_case.text,
      text: 'Введите ваше имя:',
    },
    {
      id: 2,
      type: question_case.one,
      text: 'Какой цвет неба?',
      options: ['Синий', 'Зеленый', 'Красный'],
    },
    {
      id: 3,
      type: question_case.multiple,
      text: 'Выберите все правильные варианты:',
      options: ['Машина', 'Мотоцикл', 'Маршрутка'],
    },
    {
      id: 4,
      type: question_case.video,
      text: 'Запишите видео-ответ:',
    },
    {
      id: 5,
      type: question_case.audio,
      text: 'Озвучте аудио-ответ:',
    },
    {
      id: 6,
      type: question_case.photo,
      text: 'Прикрепите фотографию вашего паспорта:',
    },
  ];

  const questionsThinking: QuestionType[] = [ 
    {
      id: 1,
      type: question_case.one,
      text: 'Я без особых сложностей разбираюсь в чертежах и схемах.',
      options: ['Соглвсен', 'Сомневаюсь', 'Трудно сказать', 'Не согласен'],
    },
    {
      id: 2,
      type: question_case.one,
      text: 'Мне кажется, что работа сценариста/писателя интересна.',
      options: ['Согласен', 'Сомневаюсь', 'Трудно сказать', 'Не согласен'],
    },
    {
      id: 3,
      type: question_case.one,
      text: 'Я люблю читать стихи и рассказы вслух.',
      options: ['Согласен', 'Совершенно согласен', 'Трудно сказать', 'Сомневаюсь', 'Не согласен'],
    },
    {
      id: 4,
      type: question_case.one,
      text: 'Мое хобби - это рукоделие, мастерство.',
      options: ['Трудно сказать', 'Согласен', 'Может быть', 'Сомневаюсь', 'Не согласен'],
    },
  ];

  const questionsNation: QuestionType[] = [ 
    {
      id: 1,
      type: question_case.one,
      text: 'Для вас важны традиции?',
      options: ['Соглвсен', 'Не очень. Как хочу', 'да без фанатизма', 'Конечно, я очень серьезен', 'Может быть', 'Иногда как'],
    },
    {
      id: 2,
      type: question_case.one,
      text: 'Больше всего вас раздражает(ют)...',
      options: ['Товары ужасного качества!', 'Грубые манеры', 'Политики', 'Дети', 'Все!'],
    },
    {
      id: 3,
      type: question_case.multiple,
      text: 'Какой климат для вас самый предпочтительный и комфортный?',
      options: ['Умеренный', 'Любой', 'Трудно сказать', 'Континентальный'],
    },
    {
      id: 4,
      type: question_case.multiple,
      text: 'Какое из этих блюд вам нравится больше всего?',
      options: ['Омлет', 'Колбаса,сосиски и др', 'Рагу', 'Гамбургер', 'Пицца', 'Все', 'Фасфуд'],
    },
    {
      id: 5,
      type: question_case.multiple,
      text: 'Чтобы вы сделали, если бы выиграли в лотерею?',
      options: ['Купил бы замок', 'Построил бы дом', 'Инвестировал бы', 'Помогал бы людям', 'Кто знает!'],
    },
    {
      id: 6,
      type: question_case.multiple,
      text: 'А какой у вас любимый напиток?',
      options: ['Черный чай', 'Квааас!!!', 'Sprite', 'Пиво', 'Все из перечисленного'],
    },
  ];

  export const list: TestType[] = [
    {
      id: 1,
      img: '/static/anketa.png',
      title: 'Анкетирование',
      description: 'психологический вербально-коммуникативный метод, в котором в качестве средства для сбора сведений от респондента используется специально оформленный список вопросов — анкета.',
      createdAt: formatDate(new Date()),
    },
    {
      id: 2,
      img: '/static/opros.png',
      title: 'Опросник',
      description: 'Упорядоченный список или каталог вопросов. Этот термин широко употребляется: любой контрольный список, инструмент, тест или анкета, который оценивает черты, мнения, убеждения, установки, модели поведения и т.д. может быть так назван; например, Миннесотский многопрофильныйличностный опросник',
      createdAt: '01.06.2023, 15:00',
    },
    {
      id: 3,
      img: '/static/smile.png',
      title: 'Тест на уровень депрессии',
      description: 'Тест на депрессию может их определить. В такие моменты человек крайне подвержен внешним воздействиям как психическим, так и физическим. Ему требуется поддержка близких людей и, возможно, в особо тяжелых случаях, помощь специалиста. И все‐таки она считается болезнью, которая поддается лечению.',
      createdAt: formatDate(new Date()),
    },
    {
      id: 4,
      img: '/static/opros.png',
      title: 'Кто вы по национальности?',
      description: 'Россия всегда была многонациональной страной, и поэтому важно знать свои корни и то, кем были наши предки. Тест на национальность может это определить без особых проблем. Он составлен на основе длительного наблюдения за представителями различных национальностей в естественной среде их обитания, поэтому в некоторых вопросах могут прослеживаться стереотипы. Пройдите тест на национальность прямо сейчас и узнайте, кто вы! Готовы?',
      createdAt: '12.06.2023, 05:00',
    },
    {
      id: 5,
      img: '/static/smile.png',
      title: 'Тип мышления?',
      description: 'В зависимости от психологических и физиологических особенностей у человека обычно преобладает какой-либо один тип мышления, т.е. метод обработки и анализа полученной извне информации.',
      createdAt: '15.08.2023, 18:24',
    },
    {
      id: 6,
      img: '/static/anketa.png',
      title: 'Опросник',
      description: 'Упорядоченный список или каталог вопросов. Этот термин широко употребляется: любой контрольный список, инструмент, тест или анкета, который оценивает черты, мнения, убеждения, установки, модели поведения и т.д. может быть так назван; например, Миннесотский многопрофильныйличностный опросник',
      createdAt: formatDate(new Date()),
    }
  ]

  export const testView: QuestionViewType[] = [
    {
      id: 1,
      img: '/static/anketa.png',
      title: 'Анкетирование',
      description: 'психологический вербально-коммуникативный метод, в котором в качестве средства для сбора сведений от респондента используется специально оформленный список вопросов — анкета.',
      questions: questionsAnketa,
      createdAt: formatDate(new Date()),
    },
    {
      id: 2,
      img: '/static/opros.png',
      title: 'Опросник',
      description: 'Упорядоченный список или каталог вопросов. Этот термин широко употребляется: любой контрольный список, инструмент, тест или анкета, который оценивает черты, мнения, убеждения, установки, модели поведения и т.д. может быть так назван; например, Миннесотский многопрофильныйличностный опросник',
      questions: questionsAnketa,
      createdAt: formatDate(new Date()),
    },
    {
      id: 3,
      img: '/static/smile.png',
      title: 'Тест на уровень депрессии',
      description: 'Тест на депрессию может их определить. В такие моменты человек крайне подвержен внешним воздействиям как психическим, так и физическим. Ему требуется поддержка близких людей и, возможно, в особо тяжелых случаях, помощь специалиста. И все‐таки она считается болезнью, которая поддается лечению.',
      questions: questionsThinking,
      createdAt: formatDate(new Date()),
    },
    {
      id: 4,
      img: '/static/opros.png',
      title: 'Кто вы по национальности?',
      description: 'Россия всегда была многонациональной страной, и поэтому важно знать свои корни и то, кем были наши предки. Тест на национальность может это определить без особых проблем. Он составлен на основе длительного наблюдения за представителями различных национальностей в естественной среде их обитания, поэтому в некоторых вопросах могут прослеживаться стереотипы. Пройдите тест на национальность прямо сейчас и узнайте, кто вы! Готовы?',
      questions: questionsNation,
      createdAt: formatDate(new Date()),
    },
    {
      id: 5,
      img: '/static/smile.png',
      title: 'Тип мышления?',
      description: 'В зависимости от психологических и физиологических особенностей у человека обычно преобладает какой-либо один тип мышления, т.е. метод обработки и анализа полученной извне информации.',
      questions: questionsThinking,
      createdAt: formatDate(new Date()),
    },
    {
      id: 6,
      img: '/static/anketa.png',
      title: 'Опросник',
      description: 'Упорядоченный список или каталог вопросов. Этот термин широко употребляется: любой контрольный список, инструмент, тест или анкета, который оценивает черты, мнения, убеждения, установки, модели поведения и т.д. может быть так назван; например, Миннесотский многопрофильныйличностный опросник',
      questions: questionsNation,
      createdAt: formatDate(new Date()),
    }
    
  ]
  