export interface ChapterMeta {
  index: number;
  id: string;
  code: string;
  shortTitle: string;
  englishTitle: string;
  vietnameseTitle: string;
  leadQuote: string;
  subQuote: string;
}

export const CHAPTERS: ChapterMeta[] = [
  {
    index: 0,
    id: 'chapter-01',
    code: 'CHƯƠNG 01',
    shortTitle: '01. Intro',
    englishTitle: 'THE FIRST LIGHT',
    vietnameseTitle: 'Ánh sáng đầu tiên',
    leadQuote: '“Có một hành trình bắt đầu từ những điều rất nhỏ…”',
    subQuote: '“Và có những người đã âm thầm thắp sáng hành trình ấy.”'
  },
  {
    index: 1,
    id: 'chapter-02',
    code: 'CHƯƠNG 02',
    shortTitle: '02. Ký ức',
    englishTitle: 'THE CLASSROOM OF MEMORIES',
    vietnameseTitle: 'Lớp học của những ký ức',
    leadQuote: '“Ta từng nghĩ những ngày đến trường chỉ là những buổi học bình thường.”',
    subQuote: '“Đến một ngày nhìn lại, ta mới hiểu rằng chính những điều giản dị ấy đã tạo nên một phần thanh xuân.”'
  },
  {
    index: 2,
    id: 'chapter-03',
    code: 'CHƯƠNG 03',
    shortTitle: '03. Cuốn sách',
    englishTitle: 'THE BOOK OF GRATITUDE',
    vietnameseTitle: 'NHỮNG ĐIỀU THẦY CÔ ĐỂ LẠI',
    leadQuote: '“Thầy cô không chỉ dạy ta cách giải một bài toán. Thầy cô còn dạy ta cách kiên nhẫn trước những điều chưa biết.”',
    subQuote: '“Không chỉ truyền đạt kiến thức. Mà còn trao cho ta niềm tin để bước tiếp.”'
  },
  {
    index: 3,
    id: 'chapter-04',
    code: 'CHƯƠNG 04',
    shortTitle: '04. Người gieo tri thức',
    englishTitle: 'BEHIND EVERY LESSON',
    vietnameseTitle: 'Phía sau mỗi bài học',
    leadQuote: '“Đằng sau một bài học là rất nhiều điều không được viết trong giáo án.”',
    subQuote: '“Đằng sau một sự trưởng thành là những tháng ngày có người kiên nhẫn đồng hành.”'
  },
  {
    index: 4,
    id: 'chapter-05',
    code: 'CHƯƠNG 05',
    shortTitle: '05. Những lá thư',
    englishTitle: 'LETTERS NEVER FORGOTTEN',
    vietnameseTitle: 'Những lời chưa kịp nói',
    leadQuote: '“Có thể chúng em không còn nhớ hết những bài học năm nào. Nhưng chúng em vẫn nhớ những người đã kiên nhẫn chờ mình hiểu bài.”',
    subQuote: '“Cảm ơn thầy cô vì đã không chỉ nhìn thấy chúng em của hiện tại, mà còn tin vào con người chúng em có thể trở thành.”'
  },
  {
    index: 5,
    id: 'chapter-06',
    code: 'CHƯƠNG 06',
    shortTitle: '06. Khu vườn tri thức',
    englishTitle: 'THE GARDEN OF KNOWLEDGE',
    vietnameseTitle: 'Khu vườn tri thức',
    leadQuote: '“Một hạt mầm cần thời gian để trưởng thành.”',
    subQuote: '“Một con người cũng cần thời gian, sự dẫn dắt và niềm tin để tìm thấy con đường của mình.”'
  },
  {
    index: 6,
    id: 'chapter-07',
    code: 'CHƯƠNG 07',
    shortTitle: '07. Hành trình',
    englishTitle: 'A PROMISE TO THE FUTURE',
    vietnameseTitle: 'Hành trình phía trước',
    leadQuote: '“Rồi mỗi người sẽ bước đi trên một con đường khác nhau.”',
    subQuote: '“Nhưng những điều được học, những giá trị được trao và những người từng dìu dắt ta sẽ luôn là một phần hành trang.”'
  },
  {
    index: 7,
    id: 'chapter-08',
    code: 'CHƯƠNG 08',
    shortTitle: '08. Lời tri ân',
    englishTitle: 'THE FINAL TRIBUTE',
    vietnameseTitle: 'Lời tri ân cuối hành trình',
    leadQuote: '“Người thầy có thể không bước tiếp cùng học trò trên mọi chặng đường, nhưng những điều thầy cô dạy sẽ còn ở lại rất lâu.”',
    subQuote: '“Có những bài học kết thúc khi tiếng trống trường vang lên. Nhưng lòng biết ơn thì không.”'
  }
];
