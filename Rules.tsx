interface Conversion {
  title: string;
  rule: any;
  methods?: Function;
  [propName: string]: any;
}

const ConversionList: Conversion[] = [
  {
    title: '匹配字符串转对象',
    rule: /\/\*\* \* (.*?) \*\/(((\w+)\s)*((?<!\S)\S*);)/g,
    methods: function(str: string, rule: any, afterHook?: Function){
      let newStr:string = str.replace(rule, function(match, $1, $2, $3, $4, $5) {
        return `['${$1}','${$5}']`;
      })
      return newStr;
    },
    afterHook: function(cb: Function, str: any) {
      return cb(str)
    }
  },
];

export default ConversionList;
