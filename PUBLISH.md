# 发布更新一个 npm 包基本流程

## 步骤

```bash
# 保证 git 仓库清空
git add .
git commit -m "commit message"

# 发布或更新
npm --no-git-tag-version version patch
npm publish
```

## 参考
- https://cloudfour.com/thinks/how-to-publish-an-updated-version-of-an-npm-package/
- https://stackoverflow.com/a/15263406/12733140
- https://docs.npmjs.com/cli/version