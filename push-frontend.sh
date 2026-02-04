#!/bin/bash

# Script để push frontend lên cả GitLab và GitHub

cd "$(dirname "$0")"

echo "🚀 Pushing frontend to GitLab and GitHub..."

# Kiểm tra xem có thay đổi chưa commit không
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Có thay đổi chưa commit. Vui lòng commit trước khi push."
    exit 1
fi

# Push lên GitLab
echo "📤 Pushing to GitLab..."
git push gitlab main

if [ $? -eq 0 ]; then
    echo "✅ GitLab push thành công!"
else
    echo "❌ GitLab push thất bại!"
    exit 1
fi

# Push lên GitHub
echo "📤 Pushing to GitHub..."
git push github main

if [ $? -eq 0 ]; then
    echo "✅ GitHub push thành công!"
else
    echo "❌ GitHub push thất bại!"
    exit 1
fi

echo "🎉 Đã push lên cả GitLab và GitHub thành công!"
