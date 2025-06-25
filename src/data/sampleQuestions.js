const sampleQuestions = {
  'javascript-basics': [
    {
      question: 'What is the output of 2 + "2" in JavaScript?',
      options: ['4', '22', 'NaN', 'undefined'],
      answer: '22'
    },
    {
      question: 'Which keyword declares a variable in JavaScript?',
      options: ['const', 'int', 'def', 'static'],
      answer: 'const'
    },
    {
      question: 'Which of these is NOT a JavaScript data type?',
      options: ['string', 'boolean', 'float', 'undefined'],
      answer: 'float'
    },
    {
      question: 'What method converts JSON to a JavaScript object?',
      options: [
        'JSON.stringify()',
        'JSON.parse()',
        'parse.JSON()',
        'objectify()'
      ],
      answer: 'JSON.parse()'
    },
    {
      question: 'Which operator is used to assign a value?',
      options: ['=', '==', '===', ':'],
      answer: '='
    },
    {
      question:
        'Which loop will execute at least once even if the condition is false?',
      options: ['for', 'while', 'do...while', 'foreach'],
      answer: 'do...while'
    },
    {
      question: 'Which function is used to delay execution in JavaScript?',
      options: ['delay()', 'setInterval()', 'setTimeout()', 'pause()'],
      answer: 'setTimeout()'
    },
    {
      question: 'What is the keyword used to define a function?',
      options: ['func', 'function', 'define', 'method'],
      answer: 'function'
    },
    {
      question: 'What is the result of `typeof NaN`?',
      options: ['NaN', 'undefined', 'object', 'number'],
      answer: 'number'
    },
    {
      question: 'What symbol is used for single-line comments?',
      options: ['//', '/*', '<!--', '#'],
      answer: '//'
    }
  ],
  'vue-basics': [
    {
      question: 'What is the root Vue instance property used to mount the app?',
      options: ['el', 'mount', 'attach', 'root'],
      answer: 'el'
    },
    {
      question: 'What directive is used to bind HTML content in Vue?',
      options: ['v-content', 'v-html', 'v-bind-html', 'v-inner'],
      answer: 'v-html'
    },
    {
      question:
        'How do you declare a reactive variable in Vue 3 composition API?',
      options: ['reactive()', 'ref()', 'state()', 'useState()'],
      answer: 'ref()'
    },
    {
      question: 'Which directive is used to bind attributes?',
      options: ['v-model', 'v-if', 'v-bind', 'v-for'],
      answer: 'v-bind'
    },
    {
      question: 'What lifecycle hook is called after the component is mounted?',
      options: ['created', 'beforeMount', 'mounted', 'updated'],
      answer: 'mounted'
    },
    {
      question: 'What directive is used for two-way binding?',
      options: ['v-bind', 'v-if', 'v-model', 'v-show'],
      answer: 'v-model'
    },
    {
      question: 'Which method creates a new Vue 3 app?',
      options: ['Vue.createApp()', 'new Vue()', 'Vue.init()', 'app.create()'],
      answer: 'Vue.createApp()'
    },
    {
      question: 'What file typically contains routes in a Vue app?',
      options: ['routes.js', 'router.js', 'app.js', 'main.js'],
      answer: 'router.js'
    },
    {
      question: 'How do you loop through an array in Vue templates?',
      options: ['v-for', 'v-loop', 'v-each', 'v-iterate'],
      answer: 'v-for'
    },
    {
      question: 'What symbol is used to indicate a directive in Vue?',
      options: ['@', '#', ':', 'v-'],
      answer: 'v-'
    }
  ],
  'html-basics': [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyperlink and Text Markup Language',
        'Hyper Text Markup Language',
        'Home Tool Markup Language',
        'None'
      ],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'Which tag is used for inserting an image?',
      options: ['<img>', '<image>', '<pic>', '<src>'],
      answer: '<img>'
    },
    {
      question: 'Which tag creates a hyperlink?',
      options: ['<a>', '<link>', '<href>', '<url>'],
      answer: '<a>'
    },
    {
      question: 'What tag defines the largest heading?',
      options: ['<h6>', '<heading>', '<head>', '<h1>'],
      answer: '<h1>'
    },
    {
      question: 'Which attribute specifies an alternate text for an image?',
      options: ['alt', 'title', 'src', 'name'],
      answer: 'alt'
    },
    {
      question: 'What element is used to create a list with bullets?',
      options: ['<ol>', '<ul>', '<li>', '<dl>'],
      answer: '<ul>'
    },
    {
      question: 'Which tag is used to define a table row?',
      options: ['<td>', '<th>', '<tr>', '<table>'],
      answer: '<tr>'
    },
    {
      question: 'Which tag is used to display a horizontal rule?',
      options: ['<line>', '<hr>', '<br>', '<rule>'],
      answer: '<hr>'
    },
    {
      question: 'Which tag is used for line breaks?',
      options: ['<break>', '<br>', '<lb>', '<nl>'],
      answer: '<br>'
    },
    {
      question: 'Which attribute is used to uniquely identify an HTML element?',
      options: ['id', 'class', 'name', 'ref'],
      answer: 'id'
    }
  ],
  'tailwind-css-basics': [
    {
      question: 'What utility class is used to apply margin in Tailwind CSS?',
      options: ['.margin', 'm-4', 'mtop-2', 'pad-3'],
      answer: 'm-4'
    },
    {
      question: 'Which class sets the text color to red in Tailwind?',
      options: ['text-red', 'color-red', 'text-red-500', 'font-red'],
      answer: 'text-red-500'
    },
    {
      question: 'What does the class "flex" do in Tailwind?',
      options: [
        'Applies Flexbox layout',
        'Makes text bold',
        'Centers content',
        'Adds padding'
      ],
      answer: 'Applies Flexbox layout'
    },
    {
      question: 'How do you apply padding of 2 units on all sides?',
      options: ['p-2', 'pad-2', 'padding-2', 'pd-2'],
      answer: 'p-2'
    },
    {
      question: 'Which class is used to round the corners of an element?',
      options: ['radius', 'rounded', 'border-radius', 'corner'],
      answer: 'rounded'
    },
    {
      question: 'What does "bg-blue-500" do in Tailwind CSS?',
      options: [
        'Sets background color to blue (shade 500)',
        'Adds blue border',
        'Changes text to blue',
        'Adds blue shadow'
      ],
      answer: 'Sets background color to blue (shade 500)'
    },
    {
      question: 'Which of these classes will center text?',
      options: ['center-text', 'text-center', 'justify-center', 'align-text'],
      answer: 'text-center'
    },
    {
      question: 'Which class adds a drop shadow to an element?',
      options: ['box-shadow', 'shadow', 'drop-shadow', 'shadow-box'],
      answer: 'shadow'
    },
    {
      question: 'How do you make an element span the full width of its parent?',
      options: ['w-full', 'width-100', 'full-width', 'max-width'],
      answer: 'w-full'
    },
    {
      question: 'What class is used to hide an element in Tailwind?',
      options: ['display-none', 'hide', 'hidden', 'invisible'],
      answer: 'hidden'
    }
  ]
}

export default sampleQuestions
