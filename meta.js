module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue.js UMD project"
    },
    "author": {
      "type": "string",
      "label": "Author"
    },
    "sass": {
       "type": "confirm",
       "message": "Use sass?",
       "default": true
    }
  },
  "helpers": {
    lowercase: str => str.toLowerCase(),
    uppercase: str => str.replace(/\w\S*/g, txt => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
  },
  "completeMessage": "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev.{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev.{{/inPlace}}"
}