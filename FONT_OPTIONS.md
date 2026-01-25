# Danh Sách Font Chữ Có Thể Thay Đổi

## Font hiện tại
Dự án đang sử dụng: **Inter** (từ Google Fonts)

## Các font phổ biến hỗ trợ tiếng Việt

### 1. **Google Fonts (Miễn phí, dễ tích hợp)**

#### Font Sans-serif (Không chân):
- **Inter** (hiện tại) - Modern, clean, professional
- **Roboto** - Rất phổ biến, dễ đọc
- **Open Sans** - Friendly, approachable
- **Lato** - Warm, friendly
- **Poppins** - Modern, geometric
- **Nunito** - Rounded, friendly
- **Montserrat** - Elegant, geometric
- **Source Sans Pro** - Clean, professional
- **Work Sans** - Modern, versatile
- **DM Sans** - Clean, contemporary

#### Font Serif (Có chân):
- **Playfair Display** - Elegant, classic (thường dùng cho heading)
- **Merriweather** - Readable, traditional
- **Lora** - Elegant, readable
- **Crimson Text** - Classic, readable

#### Font Display (Cho heading):
- **Bebas Neue** - Bold, impactful
- **Oswald** - Condensed, strong
- **Raleway** - Elegant, versatile
- **Barlow** - Modern, clean

### 2. **Font hệ thống (Không cần tải)**

#### Windows:
- Segoe UI
- Arial
- Calibri

#### macOS:
- SF Pro Display
- Helvetica Neue
- Arial

#### Linux:
- Ubuntu
- Cantarell
- DejaVu Sans

### 3. **Font tiếng Việt chuyên dụng**

#### Google Fonts hỗ trợ tiếng Việt tốt:
- **Noto Sans** - Hỗ trợ đầy đủ Unicode, nhiều ngôn ngữ
- **Noto Serif** - Phiên bản có chân
- **Roboto** - Hỗ trợ tốt tiếng Việt
- **Open Sans** - Hỗ trợ tốt tiếng Việt
- **Lato** - Hỗ trợ tốt tiếng Việt

### 4. **Font premium (Trả phí)**
- **Avenir** - Premium, elegant
- **Proxima Nova** - Modern, versatile
- **Gotham** - Clean, professional
- **Futura** - Geometric, modern

## Cách thay đổi font

### Bước 1: Cập nhật Google Fonts link trong `src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
```

### Bước 2: Cập nhật `tailwind.config.js`
```js
fontFamily: {
  sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
},
```

### Bước 3: Cập nhật `src/index.css`
```css
body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## Gợi ý font cho website y tế/phòng khám

### Phong cách hiện đại, chuyên nghiệp:
1. **Inter** (hiện tại) ✅
2. **Roboto**
3. **Open Sans**
4. **Work Sans**

### Phong cách thân thiện, dễ tiếp cận:
1. **Nunito**
2. **Lato**
3. **Poppins**

### Phong cách sang trọng, cao cấp:
1. **Playfair Display** (cho heading) + **Source Sans Pro** (cho body)
2. **Merriweather** (cho heading) + **Lato** (cho body)

## Lưu ý
- Chọn font có trọng lượng (weights) đầy đủ: 300, 400, 500, 600, 700, 800
- Đảm bảo font hỗ trợ tiếng Việt (có dấu)
- Kiểm tra hiệu suất: font càng nhiều weights càng nặng
- Test trên nhiều thiết bị và trình duyệt
