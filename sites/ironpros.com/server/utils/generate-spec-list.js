const excludeKeys = [
  'externalproductid',
  'companyexternalid',
  'productSKU',
  'productName',
  'immediate',
  'preorder',
];

module.exports = ({ specsToAppend }) => {
  if (!specsToAppend) return [];
  const specs = [];
  specsToAppend.forEach(({specs: s}) => {
    s.forEach(({ key, label }) =>{
      const existingSpec = specs.filter((s) => s.key === key).length > 0;
      if (!existingSpec && !excludeKeys.includes(key)) {
        specs.push({ key, label });
      }
    });
  });
  return specs.sort((a, b) => a.label.localeCompare(b.label));;
};