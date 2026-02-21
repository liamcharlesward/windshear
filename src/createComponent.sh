echo "Enter component name?"
read componentName
cd /Users/liamward/Code/windshear/src
mkdir ${componentName}
cd ${componentName}

echo "export interface ${componentName}Props {};" >> ${componentName}.props.ts

echo """
  import type {${componentName}Props} from \"./${componentName}.props\";
  
  export const ${componentName} = (props: ${componentName}Props) => {
    return (

    );
  };
""" >> ${componentName}.tsx

echo """
  import {${componentName}} from \"./${componentName}\";

  export default {
    component: ${componentName},
  };

  export const Primary = {
  args: {

  },
};
""" >> ${componentName}.stories.tsx