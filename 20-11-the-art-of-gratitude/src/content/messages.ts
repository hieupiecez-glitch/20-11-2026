export interface OrbitWordItem {
  word: string;
  orbitType: 'Quỹ đạo vòng tròn' | 'Quỹ đạo xoắn ốc' | 'Chuyển động chiều sâu' | 'Trôi từ xa đến gần';
  radiusX: number;
  radiusY: number;
  radiusZ: number;
  angleOffset: number;
  speed: number;
  description: string;
}

export const CORE_MESSAGE =
  '“Có những người không đi cùng ta suốt cuộc đời, nhưng những điều họ dạy sẽ theo ta đến tận cuối con đường.”';

export const ORBIT_WORDS: OrbitWordItem[] = [
  {
    word: 'Tri thức',
    orbitType: 'Quỹ đạo vòng tròn',
    radiusX: 250,
    radiusY: 95,
    radiusZ: 120,
    angleOffset: 0.0,
    speed: 0.35,
    description: 'Không chỉ là những con chữ nằm yên trên trang giấy, tri thức thầy cô trao là chiếc la bàn giúp học trò tự định hướng giữa biển lớn cuộc đời.'
  },
  {
    word: 'Kiên nhẫn',
    orbitType: 'Quỹ đạo xoắn ốc',
    radiusX: 285,
    radiusY: 135,
    radiusZ: 140,
    angleOffset: 0.628,
    speed: 0.31,
    description: 'Là những lần thầy cô chậm rãi giảng lại một khái niệm khó, chờ đợi từng học trò hiểu thấu mà không một lời trách móc.'
  },
  {
    word: 'Bao dung',
    orbitType: 'Chuyển động chiều sâu',
    radiusX: 240,
    radiusY: 155,
    radiusZ: 165,
    angleOffset: 1.256,
    speed: 0.28,
    description: 'Những vụng về, bồng bột của tuổi học trò luôn được thầy cô đón nhận bằng ánh mắt vị tha để mỗi lỗi lầm trở thành một bài học lớn.'
  },
  {
    word: 'Dẫn lối',
    orbitType: 'Quỹ đạo vòng tròn',
    radiusX: 300,
    radiusY: 110,
    radiusZ: 130,
    angleOffset: 1.884,
    speed: 0.33,
    description: 'Khi học trò đứng trước những ngã rẽ đầu đời, lời khuyên chân thành của thầy cô chính là ánh đèn soi sáng bước chân.'
  },
  {
    word: 'Ước mơ',
    orbitType: 'Quỹ đạo xoắn ốc',
    radiusX: 265,
    radiusY: 165,
    radiusZ: 150,
    angleOffset: 2.512,
    speed: 0.29,
    description: 'Nhiều ước mơ lớn lao đã được nhen nhóm từ một lời khen nhỏ của thầy cô trên trang vở học trò.'
  },
  {
    word: 'Niềm tin',
    orbitType: 'Trôi từ xa đến gần',
    radiusX: 295,
    radiusY: 125,
    radiusZ: 175,
    angleOffset: 3.141,
    speed: 0.27,
    description: '“Không chỉ truyền đạt kiến thức, mà còn trao cho ta niềm tin để bước tiếp” — ngay cả khi chính ta còn tự ti về bản thân.'
  },
  {
    word: 'Bài học',
    orbitType: 'Quỹ đạo vòng tròn',
    radiusX: 255,
    radiusY: 145,
    radiusZ: 125,
    angleOffset: 3.769,
    speed: 0.34,
    description: 'Có những bài học nằm trong sách giáo khoa, và có những bài học làm người được thầy cô truyền dạy bằng chính nhân cách sống.'
  },
  {
    word: 'Trưởng thành',
    orbitType: 'Chuyển động chiều sâu',
    radiusX: 310,
    radiusY: 105,
    radiusZ: 160,
    angleOffset: 4.398,
    speed: 0.30,
    description: 'Đằng sau sự trưởng thành của mỗi học trò là biết bao tháng ngày có người thầy âm thầm dõi theo và nâng đỡ.'
  },
  {
    word: 'Người gieo hạt',
    orbitType: 'Quỹ đạo xoắn ốc',
    radiusX: 275,
    radiusY: 170,
    radiusZ: 145,
    angleOffset: 5.026,
    speed: 0.26,
    description: 'Người gieo hạt không mong cầu tên mình được khắc lên từng mùa quả ngọt, chỉ mong những hạt mầm vươn thẳng dưới bầu trời.'
  },
  {
    word: 'Ngọn đèn tri thức',
    orbitType: 'Trôi từ xa đến gần',
    radiusX: 320,
    radiusY: 140,
    radiusZ: 170,
    angleOffset: 5.654,
    speed: 0.32,
    description: 'Ngọn đèn bên bàn soạn giáo án đêm khuya đã thắp lên ánh sáng tri thức cho biết bao thế hệ nối tiếp nhau.'
  }
];
