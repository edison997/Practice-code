type userType = { s: number; isLoad: boolean; permissions: string[] };

const china: userType = {
  isLoad: true,
  s: 960,
  permissions: ["1",'2','3'],
};

const AccessDecortator =
  (keys: string[]): MethodDecorator =>
  (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const validate = () =>
      keys.every((item) => {
        return china.permissions.includes(item);
      });
    descriptor.value = () => {
      if (china.isLoad === true && validate()) {
        alert("验证成功");
      } else {
        alert("验证失败");
      }
    };
  };

class Article {
  show() {
    console.log("查看文章");
  }
  @AccessDecortator(["1",'2'])
  save() {
    console.log("保存文章");
  }
}

// new Article().show();
new Article().save();
