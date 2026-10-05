# Ghi chú tiếp tục viết – "Bên Anh Điệu Rumba Trong Gió Mùa Hạ"

Tài liệu này tóm tắt toàn bộ phần đã viết (Quyển 1 → Quyển 4, chương 134) và các quy ước, để tiếp tục viết ở một đoạn chat mới. Đọc kèm: `de-cuong.docx` (đề cương gốc của tác giả), `van-an.md`, và `README.md` trong từng thư mục quyển.

---

## 1. Cách làm việc với tác giả

- Lệnh **"viết tiếp"** = viết một đợt **6 chương** tiếp theo. Sau mỗi đợt: cập nhật README của quyển, commit, push, gửi lại **chỉ các file .md** (gửi dạng đính kèm), trả lời ngắn gọn kiểu `Chương 135–140.` Không giải thích, không ghi chú. Nếu có sửa chương cũ thì gửi kèm file đã sửa và ghi một dòng ngắn.
- Khi tác giả yêu cầu **review quyển**: kiểm tra độ dài, điểm nhìn, cảnh nhảy, logic/liên kết với các quyển trước; sửa trên file .md.
- Khi yêu cầu **xuất docx gộp quyển**: dùng `tools/build-docx.js` (xem mục 9).
- Nhánh làm việc: `claude/peaceful-bardeen-37u691`. Không tạo PR. Push: `git push -u origin claude/peaceful-bardeen-37u691`.
- Cuối commit message luôn có hai dòng attribution do hệ thống cung cấp (Co-Authored-By… và Claude-Session…).

## 2. Quy tắc viết (bắt buộc)

- **Độ dài**: mỗi chương 2.500–3.500 từ. Đếm: `sed 's/[*#>_-]//g' chuong-XXX.md | wc -w`. Thiếu thì chèn thêm cảnh.
- **Cấu trúc chương**: 2–4 cảnh, ngăn cách bằng dòng `---`. Luôn có **một cảnh đời thường** và **một cảnh sàn nhảy/tập luyện**.
- **Điểm nhìn (POV)**: chỉ hai nhân vật chính, ngôi thứ ba gần.
  - Chương **lẻ**: Ôn Chi Hạ (gọi "cô", người kia là "anh").
  - Chương **chẵn**: Tạ Kỳ Phong (gọi "anh", người kia là "cô").
  - Không kể toàn tri. Thông tin nhân vật POV không thể biết thì dùng "Mãi sau này cô/anh mới biết…", hoặc truyền qua tin nhắn, bài báo, lời kể, nghe lén.
- **Hư cấu hoàn toàn**: không dùng tên thành phố, quốc gia, tổ chức, giải đấu hay con người có thật. Chỉ tên điệu nhảy là thật. (Đã sửa các lỗi như "Thụy Sĩ", "Tràng Thi", "Tổng cục".)
- **Văn phong**: câu ngắn, nhiều dòng một câu, nhịp chậm. Lặp lại nhịp đếm "Hai. Ba. Bốn. Một." Nhiều đối thoại ngắn. Tin nhắn dạng `**Tên:** nội dung`. Chữ nghiêng `*...*` cho tin nhắn trích, lời nhớ lại, chữ viết.
- **Chi tiết nghề** ở chương thi đấu: BPM (Rumba 25 ô nhịp/phút, Samba 50, Paso 62), gel tóc 3 lớp "cứng như mũ bảo hiểm", keo dán váy ("lạnh mới dính"), giày Latin gót 6 phân, chải đế bằng bàn chải sắt, số đeo lưng, hệ thống skating, chín giám khảo.
- **Cảnh 18+** (chỉ từ Quyển 2): dùng ngôn ngữ vũ đạo làm ẩn dụ (trọng tâm, trục, dẫn và theo, hơi thở theo nhịp). Ưu tiên giác quan. Đồng thuận rõ ràng từ cả hai, cô chủ động. Luôn có chăm sóc sau đó (anh xoa lưng cô 15 phút là nghi thức riêng). Sau mỗi cột mốc thân mật, điệu Rumba trên sàn đổi khác và người ngoài nhận ra (cô Tố Nga, Tuyết Nghi, Diệc Thần…).
- **Mỗi quyển từ Q4 trở đi**: 4–6 cảnh thân mật gắn với bước ngoặt.

## 3. Tình trạng hiện tại

| Quyển | Tên | Chương | Trạng thái |
|---|---|---|---|
| 1 | Đồng phục và lời hứa | 1–36 | Xong, đã review, có `Quyen-1-Dong-phuc-va-loi-hua.docx` |
| 2 | Rumba đối đầu | 37–76 | Xong, đã review, có `Quyen-2-Rumba-doi-dau.docx` |
| 3 | Nhịp thứ tư chưa có kết | 77–116 | Xong, đã review, có `Quyen-3-Nhip-thu-tu-chua-co-ket.docx` |
| 4 | Ba centimet | 117–156 | **Đang viết, xong đến chương 134.** Chương tiếp theo: **135 (POV Ôn Chi Hạ)** |
| 5 | Rumba tĩnh | 157–190 | Chưa viết |
| 6 | Váy cưới | 191–212 | Chưa viết |
| Phiên ngoại | | 8 chương | Chưa viết (chỉ ở đây mới được dùng POV nhân vật phụ) |

## 4. Nhân vật

### Hai nhân vật chính
- **Ôn Chi Hạ**: sinh 23/6. Nhảy Latin, bạn nhảy của Kỳ Phong từ năm 6 tuổi. Gãy đốt sống thắt lưng thứ tư (L4) do mỏi, chẩn đoán lần đầu 14/9 năm 16 tuổi. Mổ cố định 22/7 năm 17 tuổi (hai cái vít), sẹo 4 phân bên trái ngang L4. Một năm không đứng thẳng được ở Sương Lĩnh. Tính cách: tự trọng, "không ai nợ ai", hay giấu chuyện để người khác khỏi lo. Đó là lỗi cô đang học sửa. Khi căng thẳng thì miết ngón cái tay phải vào đốt ngón trỏ. Mê bánh tráng nướng, mặc cả từng mớ rau. Hiện có hợp đồng quản lý với Starcrest (Diêu Mạn) và hợp đồng quảng cáo nhỏ với một hãng nước khoáng ở Sương Lĩnh (chưa chụp, tiền về cuối tháng Chín).
- **Tạ Kỳ Phong**: sinh 7/9, kém cô 2 tháng 15 ngày. Năm năm ở Học viện Khiêu vũ Hoàng gia Estherwyn (Aldmere) với bạn nhảy Isadora. Về Ngân Sơn năm 22 tuổi. Hạng 4 thế giới sau Kim Diệp. Quen đồ đắt, ăn theo bảng của chuyên gia dinh dưỡng. Cổ tay trái buộc **sợi ruy băng đỏ** cô tặng năm lớp 3. Đọc được trọng tâm và hơi thở người khác ("đọc được"). Hai lần nói dối cô: (1) năm 6 tuổi bảo cô "ngã đẹp, xoay được nửa vòng"; (2) năm 11 tuổi khen chữ thêu lệch là đẹp.
- **Về tuổi**: ở năm hiện tại của truyện, cô tròn 24 vào ngày 23/6 và anh tròn 24 vào ngày 7/9. Đề cương ghi "sinh nhật 25 của anh" ở mùa thu Q4, nhưng bản thảo giữ **24** để khớp các quyển trước. Đã báo tác giả.

### Gia đình Ôn (nhà cô)
- **Bố: Ôn Đại Sơn**, khoảng 52 tuổi, lái xe tải sơn xanh bong tróc chạy đường đèo Sương Lĩnh – Đỉnh Mây. Ít nói, xưng "tao – mày" với Phong. Lái xe hai tay ở vị trí 10 giờ và 2 giờ. Mua bánh dừa cho con gái mỗi năm một hộp suốt 20 năm (tiệm bà Sáu, Nguyệt Loan). Năm năm nạp tiền giữ chiếc SIM cũ của cô. Chụp 60 tấm màn hình tin nhắn "Tớ về". **Hiện đang nằm viện** (bệnh viện huyện chân đèo Sương Lĩnh): phổi nhiễm bụi kèm viêm, có tổn thương thùy dưới phải, "chưa phải ung thư". Phải điều trị 3 tháng, nằm viện 2 tuần, nghỉ lái ít nhất 6 tháng. Định **bán xe tải**.
- **Mẹ: chị Tống** (Lăng gọi "chị Tống"), thợ may. Xưa có sạp vải ở chợ Vọng Hải (Nguyệt Loan), sửa 320 bộ váy cho Hải Âu để đổi học phí cho con. Sinh con năm 24 tuổi, lấy chồng 25 năm. Nói thẳng, mặc cả giỏi. Đã hứa với Lăng: "Nếu nhà em không lo được, em sẽ gọi chị. Em không giấu."
- **Em gái: Ôn Chi Thu** ("em Thu"), kém chị 6 tuổi, nay 17 tuổi. Lanh, hay nói "Chán chết đi được", luôn "đeo tai nghe". Biết bố ho ra máu một tuần nhưng giấu, rồi kể với Phong. Đã nghe chị kể toàn bộ chuyện năm 17 tuổi (ch133). Lập nhóm chat hai nhà tên **"Hai nhà một bếp. Bốn cặp."** Năm 19 tuổi (Q4 cuối) sẽ làm trợ giảng ở Hải Âu.
- **Nợ nhà Ôn**: năm cô 16–17 tuổi, bố ký bảo lãnh cho bạn (Lưu), Lưu bỏ trốn, nợ 180 triệu; bán nhà ở Nguyệt Loan trả nợ. Hiện còn: (1) **tiền xe tải** vay Quỹ tín dụng nhân dân thị trấn Sương Lĩnh, 10 năm, đã trả 79 kỳ, còn 3 năm; (2) **nợ dì Lan** (người quen ở chợ Vọng Hải) tiền mổ lưng, còn **40 triệu**. Bố trả dì Lan mỗi tháng kèm giấy "Kỳ thứ mấy. Cảm ơn chị", được 52 tờ.
- Nhà ở Sương Lĩnh: nhà cấp bốn thuê, lưng chừng **dốc thứ ba**, giàn bầu, ghế gỗ em Thu đóng. Phòng em Thu và phòng cô ngăn bằng **vách gỗ**.

### Gia đình Tạ (nhà anh)
- **Mẹ: Lăng Vân Thư**, khoảng 52 tuổi. Cựu "nữ hoàng Standard" quốc gia, năm lần vô địch, giải nghệ năm 29 tuổi. Từng có thư mời đặc cách vào học viện Estherwyn năm 17 tuổi nhưng không nhập học. Bạn nhảy đầu tiên là **Trịnh Quân** (đứt dây chằng gối, bỏ đi). Hiện là **Phó Chủ tịch Liên đoàn thành phố**. Lưng thẳng "như sợi dây đàn". Năm cô 17 tuổi gặp mẹ cô ở **Thạch Kiều**, khuyên cô rời đi để Phong đi Estherwyn. Đó là cái lỗi bà đã nhận. Bây giờ gọi cô là "con", xưng "mẹ" (từ 24/6, bên nồi cháo cá). Câu nói trước báo chí ở Lam Cảng: **"Con trai tôi nói đúng."** Đã đến Sương Lĩnh thuyết phục mẹ Khúc Bảo, ký học bổng Liên đoàn cho trẻ vùng núi. Năm cô 9 tuổi, chính bà dạy cô **mở tay muộn nửa nhịp**.
- **Bố: Tạ Hoài Cẩn**, kiến trúc sư hiền lành, "đồng minh bí mật" của cô từ bé. Tự đóng cầu thang lên phòng áp mái năm Phong 3 tuổi, cố ý để bậc 10 và 11 kêu.
- **Bà nội**: 84 tuổi, nhà ở Nguyệt Loan. Vui tính, mê phim. Tai nặng nhưng nghe được bậc thứ mười. Ám hiệu **gõ gậy ba tiếng**. Bật đèn phòng áp mái khi có người đi tối chưa về. Ông nội là thủy thủ, mất năm Phong 2 tuổi. Phòng áp mái có **ô cửa sổ tròn** nhìn ra vịnh Nguyệt Loan và sân thượng nhà văn hóa phường. Bà đã trao **chìa khóa đồng phòng áp mái** cho cô.

### Thầy cô, đồng đội, bạn bè
- **Cô Phương Tuệ**: 74 tuổi, HLV câu lạc bộ Hải Âu. Áo len đen quanh năm, lưng thẳng như kim chỉ nam. Đã nghe đoạn kết "Nhịp Thứ Tư" ngày 31/5. Tặng hai đứa chiếc **máy cát-xét** của Hải Âu. Câu chốt: "Bài này có kết rồi, nhưng chưa trọn. Trọn thì phải nhảy lại từ đầu, trước mặt cả hai nhà. Lúc ấy cô ngồi hàng đầu." Nhà ở cuối ngõ sau câu lạc bộ, có giàn hoa giấy trắng và một con mèo già màu tro.
- **Thầy Nghiêm Cảnh Hòa**: HLV trưởng đội tuyển, nghiêm, ít lời, khóe miệng "cong lên một milimét". "Trong phòng tập không hôn. Ngoài phòng tập tôi không quản."
- **Cô Quan Tố Nga**: biên đạo đội tuyển. Đo khoảng cách bằng **thước dây vải vàng**. Hồi 12 tuổi ngồi hàng ghế thứ 20 xem Lăng thi, coi Lăng là thần tượng. Ghi chép bằng bút chì vào bản biên đạo. Câu cửa miệng: "Tôi không hỏi." Đã viết thư cho ban tổ chức Marivonne, được đồng ý giảm đèn trong 16 nhịp đầu bài Rumba ở chung kết.
- **Thầy Bạch Tùng**: HLV đội trẻ thành phố hồi nhỏ.
- **Thầy Lucien Ardois**: biên đạo người Estherwyn, chống ba toong. Tặng mỗi người một **đồng hồ cát 3 phút** (chiếc của cô làm cùng lúc với chiếc của anh). "Thầy xem Rumba bằng tai."
- **Lâm Tuyết Nghi & Chu Diệc Thần**: cặp số hai quốc gia, bài Rumba tên **"Tập đi"**. Tuyết Nghi lạnh lùng, sắc sảo, là "bạn thù" thân thiết của cô. Từng ba năm rối loạn ăn uống (bạn nhảy cũ âm thầm cắt dần đoạn nâng). Uống sữa nóng bằng **cốc sứ vẽ con gấu** do Diệc Thần vẽ tay trái. Hai người đang dần thành đôi (nắm tay, "chưa phải"). Diệc Thần là người đăng video "ba centimet", hay "đeo tai nghe", ở phòng 304 cạnh phòng anh.
- **Mạc Thiên Du & Tô Linh**: cặp nhỏ nhất đội tuyển, 14 tuổi (kém hai người chính 10 tuổi).
- **Kiều An**: vận động viên nữ, phòng bên cạnh cô ở ký túc xá.
- **Diêu Mạn**: 37 tuổi, giám đốc bộ phận vận động viên của Starcrest. Vest, tóc bob, kính râm. Nói nhanh, "đầu tư dài hạn" (đã ba lần). Đã quản lý cả cô.
- **Lạc Tiểu Mãn**: bạn thân của cô, cao 1m78, cựu đội trưởng bóng rổ trường Tùng Bách, ở Nguyệt Loan.
- **Hàn Duật**: bạn thân của anh, phóng viên thể thao, đeo kính. Yêu Tiểu Mãn 12 năm, tỏ tình dịp Tết, giờ là người yêu. Viết bài **"Ba mươi bảy tài khoản và một đôi giày chạy bộ"** (27/8).
- **Khúc Nam & Tiểu Vy**: Khúc Nam là bạn nhảy của cô những năm ở Sương Lĩnh (giải nghệ vì gối), dạy câu lạc bộ khiêu vũ nhà thiếu nhi Sương Lĩnh. Cưới Tiểu Vy ngày 5/10 năm ngoái. Con gái **Khúc Hạ Vy**, sinh 3h40 ngày 30/7, nặng 3,2 kg. Cô là mẹ đỡ đầu, anh là cha đỡ đầu. Có chiếc vòng bạc khắc "Hạ Vy" để đeo cho bé hôm đầy tháng: "Hai người cùng đeo. Đừng để một người làm một mình." **Chưa viết cảnh đầy tháng (cuối tháng Tám/đầu tháng Chín).**
- **Bé Sương** (7 tuổi, kẹp tóc bông hoa, sún răng cửa) và **Khúc Bảo** (8 tuổi, cháu Khúc Nam): cặp nhỏ ở câu lạc bộ Sương Lĩnh. Khúc Bảo đeo dải lụa đỏ cắt từ khăn của Lăng, buộc lên tay bởi Bé Sương. Câu của Bé Sương: "Lần sau cậu né." Hải Âu dành chỗ học hè miễn phí cho hai đứa.
- **Isadora Wren**: bạn nhảy của anh ở Aldmere, chồng là Tobias, con gái **Mira** (sinh tháng Mười Một năm ngoái).
- **Elodie Marchetti & Bastien Roux**: cặp Estherwyn, đối thủ (hạng nhì Kim Diệp). Elodie từng gửi ảnh đôi giày "đáng lẽ ném vào đầu cậu".
- **Ở Trung tâm Huấn luyện Ngân Sơn**:
  - **Bà Thẩm**: bảo vệ ca đêm ký túc xá nữ, ngoài 60 tuổi. Đan khăn len: chiếc màu mận chín anh buộc lên **cây ngân hạnh thứ bảy**, chiếc xanh thẫm tặng anh. Bà là **vợ của giám đốc Đàm** (35 năm trước ông trèo rào ký túc xá nữ để gặp bà).
  - **Giám đốc Đàm**: 60 tuổi, giám đốc Trung tâm.
  - **Ông Lục**: bảo vệ ca đêm ký túc xá nam, hay ngủ gật, nay đã chuyển sang ca ngày.
  - **Bác Toàn**: bảo vệ cổng (Q2), cho mượn ô và xe máy.
  - **Bác sĩ Lam** (chuyên khoa cột sống) và **bác sĩ Văn** (bác sĩ đội tuyển).
- **Ở Nguyệt Loan**:
  - **Bà Sáu**: tiệm bánh dừa góc chợ, cạnh sạp vải cô Mão. Giữ **hộp thiếc nắp xanh lá có hình cây dừa** của cô năm 4 tuổi. Đã giao cho anh: "Hộp thứ hai mươi. Từ năm nay cháu mua."
  - **Cô Mão**: sạp vải.
  - **Bà hàng xóm** của nhà Tạ.
  - **Bác Lâm**: bảo vệ trường Tùng Bách.
- **Thương hiệu**:
  - **Starcrest**: công ty quản lý hình ảnh.
  - **Sel Aurane**: đồng hồ của Estherwyn (Q2).
  - **Corvane**: đồ thể thao Estherwyn. Đã chấm dứt hợp đồng không phạt từ 0 giờ ngày 19/8, vì công ty truyền thông **Ánh Lam Media** họ thuê đã dựng 37 tài khoản ảo tạo hashtag **#KePhanBoiNamXua**.
  - **Hãng nước khoáng Sương Lĩnh**: hợp đồng của cô.

## 5. Địa danh (hư cấu)

- Quốc gia **Tinh Lam**. Nước ngoài: Vương quốc **Estherwyn**, thủ đô **Aldmere** (sông Aldwell). Giải vô địch thế giới ở thành phố **Marivonne**, chung kết tại Cung **Solstice** (mái vòm kính). Liên đoàn quốc tế GDSU. Giờ Aldmere chậm hơn Tinh Lam 6 tiếng.
- **Nguyệt Loan**: thành phố biển, quê hai người.
  - Vịnh Nguyệt Loan, phố Lưới Biển (hàng phượng, **cây phượng thứ ba** nơi anh đứng chờ cô mỗi tối suốt 4 năm từ lớp 7), dốc Chợ Cũ, bến phà cũ, bờ kè, nhà hát lớn Nguyệt Loan, chợ Vọng Hải, chợ Nguyệt Loan.
  - Trường Liên cấp **Tùng Bách** (lớp 1A của anh, lớp 1C của cô, hiệu thuốc cạnh cổng, chỗ hở ở rào sau).
  - **Nhà văn hóa phường**: tòa ba tầng cuối phố Lưới Biển. **Câu lạc bộ Hải Âu ở tầng 3**, cầu thang gỗ kêu cót két. Sàn gỗ màu mật ong, quạt trần, rèm xanh bạc màu, cửa sổ phía tây, tấm gương có **vết nứt hình tia chớp**. Phía trên là **sân thượng**.
  - Nhà họ Tạ: cây hoa giấy ở sân, bàn đá, cầu thang 14 bậc lên phòng áp mái.
  - Phố Ngư Phủ (tiệm sửa đài).
- **Ngân Sơn**: thủ đô thể thao, nơi có **Trung tâm Huấn luyện Ngân Sơn**.
  - **Phòng tập số ba** (6 ô cửa sổ, ghế gỗ của cô Tố Nga), kho dụng cụ phía sau.
  - Con đường ngân hạnh dài 300 m nối khu nhà tập với ký túc xá. **Cây ngân hạnh thứ bảy** là cây non, được buộc bằng khăn mận chín sau bão.
  - Ký túc xá nữ (phòng cô ở tầng 2, cuối hành lang; giờ giới nghiêm 22:30). Ký túc xá nam (phòng anh ở tầng 3, cửa sổ thứ tư từ trái sang; giường 90 phân; giữa phòng "ba mét vuông").
  - Hàng rào phía đông, bên ngoài là đường công cộng (chỗ paparazzi đứng).
  - **Bàn thứ ba** ở quán cà phê đối diện cổng ("đắt mà dở", mỗi tháng một lần, cô trả). Xe bánh tráng nướng dưới gốc bàng ở cổng sau (chiều thứ Sáu: một cái nhiều tương ớt, một cái không trứng ít bơ).
  - Tòa hành chính (phòng giám đốc ở tầng 4).
- **Sương Lĩnh**: thị trấn núi, sương mù, rừng thông, **38 khúc cua** đường đèo. Có nhà thiếu nhi (câu lạc bộ ở tầng 2, mái tôn xanh), trạm y tế, bệnh viện huyện ở chân đèo (khoa Hô hấp, sân sau có cây đa), Đỉnh Mây (bản trên núi), Quỹ tín dụng thị trấn, rượu ngô của bà Mấn ở dốc thứ hai.
- **Vân Đình**: nhà thi đấu Vân Đình, nơi chung kết Cúp Kim Diệp.
- **Lam Cảng**: thành phố cảng phía nam, cách Nguyệt Loan 300 km. Năm 13 tuổi hai người giành cúp vàng ở đây. Năm 16 tuổi cô uống thuốc giảm đau trong phòng vệ sinh nữ (buồng thứ ba, dòng khắc "Đau thì khóc đi. Không ai thấy", cô đã viết thêm "Có người đứng ngoài cửa đấy"). Năm nay tổ chức Giải vô địch quốc gia.
- Các nơi khác: **Thạch Kiều** (nơi chia tay năm 17 tuổi, quán nước nơi hai bà mẹ gặp nhau), Linh Hải, Vũ Đài, Đảo Bạch Sa (các chặng Kim Diệp), thành phố Đông Sơn (câu lạc bộ thời nhỏ của Tố Nga).

## 6. Mô-típ, ám hiệu, đồ vật

- **Đếm Rumba "Hai, ba, bốn, một"**: nhịp 4–1 là "nhịp chờ". Mở đầu và kết thúc tác phẩm.
- **Gõ**: **3 tiếng = "Có tớ đây"**, **4 tiếng = "Chờ"**, **5 tiếng = "Ngủ ngon"**. Dùng qua tường, qua tin nhắn ("Cốc. Cốc. Cốc."), bằng đèn bàn hay đèn pin nháy qua cửa sổ, bằng giơ ngón tay. Bà nội gõ gậy 3 tiếng.
- **Siết tay ba lần** = "có tớ đây" (trước khi bước lên sàn; trên bục Lam Cảng cô nói thành lời "Kỳ Phong. Có tớ đây").
- **Ngón út móc ngón út**: khi đứng xếp hàng hoặc ngồi dưới gầm bàn.
- **Nửa nhịp**: cô mở tay trái muộn hơn nửa nhịp ở cuối vòng xoay Alemana, anh chờ, ngón tay cô đặt lên sợi ruy băng đỏ trên cổ tay anh **một giây**. Lăng dạy năm cô 9 tuổi, Tố Nga đưa vào biên đạo tháng Mười năm ngoái. Bài thi Rumba hiện tại tên **"Nửa nhịp"** (trước là "Khoảng cách", rồi "Chờ"): "Quá nửa nhịp là lệch bài."
- **Bài "Nửa nhịp" bản Marivonne**: 16 nhịp đầu **trán chạm trán bất động**, nhịp 17 mới bước. **Tám nhịp cuối không biên đạo, do cô dẫn**, mỗi lần một khác. Ở Kim Diệp: lùi vào lòng anh. Ở quốc gia: đứng cạnh, cùng nhìn ra khán đài, siết tay ba lần.
- **"Ba centimet của Phong Hạ"**: khoảng cách ngực–ngực ở tư thế đóng, cô Tố Nga đo luôn đúng **3 phân** (từ 25/6). Bắt đầu nổi từ video Diệc Thần đăng 3/7. Fan ký thước kẻ, thước kẻ màu hồng. "Không centimet" chỉ xảy ra một lần (vòng danh dự ở Lam Cảng): "Ba phân là để nhảy. Không phân là để nói một lần."
- **Ruy băng đỏ**: quà anh tặng cô năm lớp 3. Cô bỏ lại trong hộp giày năm 17 tuổi, nó nằm trong túi giày anh năm 22 tuổi, nay buộc trên cổ tay trái anh. Sau này sẽ dùng **buộc nhẫn cầu hôn**.
- **Khăn tay chữ "T" xanh dương**: chiếc cũ năm 6 tuổi (chấm máu nâu ở góc) và chiếc mới bà nội tặng, anh đưa cô trước cổng Tùng Bách ("Em ngã đẹp lắm").
- **"Nhịp Thứ Tư"**: bài hai đứa tự biên đạo năm 15–16 tuổi. Cấu trúc: đi từ hai góc sàn, gặp ở giữa, một vòng xoay, chạm tay, nhịp chờ, giẫm chân cố tình; phần giữa có bến phà cũ, ba lần siết tay, bịt mắt tìm nhau, uốn lưng; rồi ngã rẽ (buông tay, lùi về hai góc, quay lưng, chờ). Năm 16 tuổi bài kết thúc ở ngã rẽ. Đoạn kết anh viết trong **cuốn sổ bìa đen 140 trang** (lưng chạm lưng 4 nhịp, cùng quay lại, đứng cạnh nhau nhìn gương, "Nhịp một. Cùng bước"). **Trang 141** cô viết: *"Rồi hai người đếm lại từ đầu. Hai, ba, bốn, một."* Ngày 31/5 ở Hải Âu, cả hai cùng lùi 7 bước mà không ai bàn trước. **Trang 142**: *"Nhịp Thứ Tư. Phần sau. Lần thứ nhất."* "Trọn vẹn" sẽ nhảy lại từ đầu trong **ngày cưới**, có cô Tuệ ngồi hàng đầu, mở mặt A cho cả nhà, mặt B cho hai người.
- **Cuộn băng cát-xét**: mặt A là "Nhịp Thứ Tư" chép từ băng gốc của cô Tuệ (rè ở giây 40, tiếng ho ở phút 2, không xóa). **Mặt B** thu đêm 23/6 trong phòng áp mái: tiếng sóng, hai giọng đếm "Hai. Ba. Bốn. Một.", tiếng thở, ba tiếng gõ ở phút 18. Nhãn ghi "Mặt B: Nhịp Thứ Tư. Phần sau."
- **Từ tiếng Estherwyn ba âm tiết** (chưa bao giờ viết ra chữ): ghép từ "người – đường – nhà", nghĩa là **"người mà mình về"**. Người Estherwyn chỉ nói một lần trong đời. Anh nói ở sảnh khách sạn Aldmere, cô nói vào tai anh ở Hải Âu ngày 31/5. Câu tiếng Tinh Lam của anh: "Ôn Chi Hạ. Em là người anh về."
- **313 tin nhắn** anh gửi vào số cũ của cô (tin cuối: "Tớ về", 13/3 năm ngoái). Ngày 13/3 năm nay cô nhắn lại tin thứ 314: "Ừ. Tớ đón." Anh còn giữ **điện thoại cũ vỏ xanh** từ năm 17 tuổi.
- **Bánh dừa hai lớp cùi**: của bố cô. Hộp thiếc nắp xanh lá. Anh mua cho cô hộp thứ 20. Anh tặng bố cô cả một hộp ("Chưa ai mua cho nó lần nào"); bố ăn 2 chiếc, "để dành".
- **Bọc vô lăng da đen** từ Aldmere (do ông tài xế xe buýt học viện tặng qua Isadora): bố cô lắp vào xe tải rồi gục đầu lên. Nếu bán xe sẽ tháo ra để dành.
- **Túi giày**: năm 11 tuổi cô may túi vải xanh thẫm, thêu "Tạ Kỳ Phong" lệch. Sinh nhật 24 của anh, cô tặng túi mới bằng **lụa đỏ sẫm** (lụa thừa của váy Kim Diệp), chữ thêu thẳng, mặt trong thêu "Ôn Chi Hạ. Không ai nợ ai."
- **Váy**: váy Kim Diệp đỏ sẫm do Lăng cắt may, mẹ cô khâu viền, 300 hạt cườm, có **dải lụa vắt ngang thắt lưng che sẹo** ("ai muốn thấy thì thấy"). Váy "Nhịp Thứ Tư" màu trắng ngà, dải ruy băng đỏ dọc vai trái. Váy cưới (Q6) sẽ có **hai tấm bảng tên đồng phục** trong lớp lót.
- **Khăn lụa đỏ sẫm** Lăng tặng sinh nhật cô: một dải cắt làm ruy băng cho Khúc Bảo, phần còn lại thành túi giày.
- **Tấm gương nứt ở Hải Âu**: chứng nhân mọi cột mốc.
- **Đồng hồ cát 3 phút**: mỗi tối anh lật lên.
- **Tinh dầu đàn hương** Tuyết Nghi tặng ("Đêm đó có lẽ không cần mười lăm phút. Nhưng sau đó thì cần").
- **"Không ai nợ ai"**: câu mẹ cô dạy từ năm cô 4 tuổi. Cô diễn giải lại: "Không có nghĩa là không ai được giúp ai. Có nghĩa là ai nợ thì người ấy trả."
- **"Không làm gì một mình. Nói với nhau trước khi quyết."**: lời hứa giữa hai người từ đêm mất điện (26/7). Đây là chủ đề trung tâm của Q4.
- Ảnh hai đứa 13 tuổi ở Lam Cảng (cô nắm vạt áo anh), bố anh chụp, Lăng giữ 11 năm.

## 7. Tóm tắt các quyển đã viết

### Quyển 1 (chương 1–36): tuổi thơ đến lúc chia tay, rồi 5 năm xa cách
- Lớp 1: khai giảng, cô ngã, anh đưa khăn tay. Học Rumba ở Hải Âu, cô giẫm chân anh ba lần ("Lần sau tớ né").
- Lớp 3: anh tặng ruy băng đỏ. Những bữa cơm nhà họ Tạ khi Lăng đi công tác.
- Lớp 7: chính thức ghép đôi, lời hứa ở bến phà. 13 tuổi giành cúp vàng Lam Cảng.
- 15–16 tuổi: biên đạo "Nhịp Thứ Tư", Trung thu trên sân thượng, lời hứa "18 tuổi cùng lên đội tuyển".
- 16–17 tuổi: đau lưng, uống thuốc giảm đau, chẩn đoán gãy L4. Nợ của bố. Thư mời Estherwyn của anh. Lăng gặp mẹ cô ở Thạch Kiều.
- Chung kết cuối cùng ở Thạch Kiều: cô nói "Tớ muốn đổi bạn nhảy". Anh quay lưng đi mười bước, cô đưa tay ra sau lưng anh. Nhà cô chuyển lên Sương Lĩnh.
- Năm năm: anh ở Aldmere với Isadora, mỗi năm mua một hộp bánh dừa. Cô một năm không đứng được, rồi dạy ở nhà thiếu nhi Sương Lĩnh với Khúc Nam.
- Năm 22 tuổi gặp lại ở Ngân Sơn: "Lâu rồi không gặp, bạn nhảy cũ."

### Quyển 2 (chương 37–76): đối đầu rồi tái ghép, mùa xuân đến mùa thu năm 22–23 tuổi
- Hợp đồng ghép cặp thử ba tháng. Anh lạnh lùng, cười với cả thế giới trừ cô.
- Diêu Mạn và Sel Aurane (anh trả nửa tiền phạt để không đứng chung khung hình với gương mặt đại diện nữ).
- Giải tuyển chọn tháng Sáu với "bốn nhịp không biên đạo". Đêm bão ở phòng tập số ba. Sinh nhật 23 của cô.
- Corvane. Giải vô địch quốc gia ở Nguyệt Loan tháng Chín. **Nụ hôn đầu đêm 6 rạng 7/9 (chương 74)**. Sinh nhật 23 của anh.
- Chương 76: "Mình không thể". Cô chưa nói thật.

### Quyển 3 (chương 77–116): mập mờ ngọt ngào, sự thật, rồi chính thức yêu, mùa thu 23 đến mùa hạ 24 tuổi
- 77–84: anh từ chối Lucien và Elodie, công khai theo đuổi cô. Đám cưới Khúc Nam ở Sương Lĩnh (12 chiếc cúc). Hôn lén. Ba tiếng gõ trên tường khách sạn. Bằng lái xe máy.
- 85–92: chặng Kim Diệp ở Aldmere, bão tuyết. Isadora và bé Mira. Từ tiếng Estherwyn thứ nhất ("Nhịp một") và thứ hai. Giao thừa trên sân thượng nhà tập. Cô viết 13 trang. Hồ sơ y tế lộ ra.
- 93–100: bố cô lỡ lời. Lăng thú nhận. Cãi nhau. Rumba thú nhận lúc 2 giờ sáng ("Đến lượt em chờ"). 313 tin nhắn. Rumba "ba mét vuông".
- 101–106: Tết ở Nguyệt Loan, phòng áp mái, hai nhà ăn Tết chung. Cuốn sổ bìa đen ở Hải Âu. Cổng Tùng Bách. Hai bà mẹ may váy. Cô Tố Nga đặt tên bài "Nửa nhịp".
- 107–110: chung kết Kim Diệp ở Vân Đình, **vô địch** (Rumba 9/9, Elodie nhì, Tuyết Nghi–Diệc Thần ba). Tin nhắn thứ 314. Lăng đến phòng tập. Hoa phượng nở.
- 111–112: 31/5 ở Hải Âu nhảy "Nhịp Thứ Tư" có kết trước cô Tuệ. Anh nói nghĩa từ Estherwyn, cô nói "Phải". Công khai với hai nhà.
- 113–116: Tuyết Nghi tặng tinh dầu. Hộp bánh dừa thứ hai mươi. **Đêm đầu tiên 23/6, sinh nhật 24 của cô, trong phòng áp mái** (chương 115). Bà nội trao chìa khóa phòng áp mái. Ba phân.

### Quyển 4 (chương 117–134 đã viết): "Ba centimet", từ cuối tháng Sáu đến 10/9 năm 24 tuổi
- **117** (CH): giờ giới nghiêm, bà Thẩm. Cô Tố Nga đo ba phân. Bánh tráng nướng ("một lần mỗi tuần").
- **118** (KP): video ba centimet lan truyền. Diêu Mạn báo Phụ lục 4 của Corvane ("không công khai quan hệ tình cảm"). Tô Linh và Thiên Du giẫm chân nhau. Elodie gọi video. Lần đầu lẻn vào ký túc xá nam (Diệc Thần "đeo tai nghe"). Bà Thẩm đưa khăn.
- **119** (CH): Giải mở rộng Ngân Sơn (17/7), thước kẻ màu hồng. Tám nhịp: "khép hai ngón tay". Trả lời phóng viên "Không bình luận". Cãi nhau rồi làm lành, đọc hợp đồng cùng nhau. Bình luận "kẻ phản bội năm xưa" xuất hiện.
- **120** (KP): bão, mất điện, nhảy dưới 12 ánh đèn điện thoại. **Cảnh thân mật thứ hai (đêm bão ở phòng anh)**. Lời hứa "không làm gì một mình". Buộc khăn mận chín lên cây ngân hạnh thứ bảy.
- **121** (CH): Sương Lĩnh, bé Khúc Hạ Vy chào đời. Bé Sương. Phong bì nợ tiền xe dưới nam châm quả dứa. Dì Lan.
- **122** (KP): đi xe tải lên Đỉnh Mây với bố cô ("Đừng"). Khúc Nam kể chuyện năm năm. Hộp vòng bạc đỡ đầu. Ghép Khúc Bảo với Bé Sương. Ghi chú "Nói với cô ấy. Sau quốc gia."
- **123** (CH): bàn thứ ba với Diêu Mạn. Cô sửa ghi chú thành "Ngay". Tuyết Nghi bắt tập Paso mười lần, kể chuyện bạn nhảy cũ.
- **124** (KP): ảnh 5h28 sáng bị chụp lén. Phòng giám đốc Đàm. Hashtag #KePhanBoiNamXua. Cô quên nửa nhịp. Anh xin được nói trên bục.
- **125** (CH): trang câu lạc bộ Sương Lĩnh bị tấn công, Khúc Bảo bị cấm đến. Lăng định họp báo nói sự thật, cô ngăn ("Cái gì không phải của họ thì đừng đưa"), Lăng tự đi gặp mẹ Khúc Bảo. Tuyết Nghi: "Câu hỏi là cô đứng đâu khi anh ta nói." Cầu thang thoát hiểm: "Anh nói phần của anh, em nói phần của em." Bà Thẩm kể chuyện, lộ ra giám đốc Đàm là chồng bà.
- **126** (KP): Hàn Duật lần ra 37 tài khoản thuộc Ánh Lam Media, khách của Corvane. Diêu Mạn xử lý, Corvane chấm dứt không phạt. Tiểu Mãn nắm tay Hàn Duật. Nhảy Rumba với cây lau nhà. Thư Marivonne đồng ý giảm đèn.
- **127** (CH): Khúc Bảo trở lại. Chín bản nháp ba câu. Tám nhịp "đứng cạnh". Phòng vệ sinh nữ Lam Cảng.
- **128** (KP): hai nhà và bà Thẩm, giám đốc Đàm đến Lam Cảng. Lăng đưa ảnh năm 13 tuổi. Chung kết quốc gia, hàng ghế đầu đứng dậy. **Vô địch quốc gia** (Tuyết Nghi–Diệc Thần nhì). Anh cầm micro.
- **129** (CH): **công khai trên bục**. Phần của anh: "Người quay lưng đi trước là tôi… Ôn Chi Hạ là người tôi về." Ba câu của cô, cộng câu thứ tư "Kỳ Phong. Có tớ đây." Lăng trả lời báo chí "Con trai tôi nói đúng." Vòng danh dự "không centimet". Bữa hải sản 12 người. Bố cô bắt "ra mắt" ngày 7/9.
- **130** (KP): bài báo của Hàn Duật. Mẹ Khúc Bảo xin lỗi. Hải Âu mời hai đứa nhỏ. Mười bốn thương hiệu; cô ký với Starcrest, chọn hợp đồng **nhỏ nhất** (nước khoáng Sương Lĩnh) để trả nợ nhà. Tiền ai nấy giữ, "không gộp". Bà Thẩm tặng khăn xanh thẫm.
- **131** (CH): đi chợ, mặc cả. Từ chối chai rượu đắt, chọn bọc vô lăng. Đôi giày Estherwyn để dành đến sinh nhật cô (anh nhờ cửa hàng giữ cỡ 36,5). Nồi lẩu cả đội, thầy Nghiêm chê cải ngồng đắt. Cô ký hợp đồng, gọi dì Lan ("nói với bố trước khi trả").
- **132** (KP): bọc vô lăng, hộp bánh dừa cho bố cô. Em Thu kể bố ho ra máu. Nửa đêm 7/9 ở dốc thứ ba: túi giày lụa đỏ, nhảy trong sương. Anh báo trước "mai có một chuyện phải nói".
- **133** (CH): ra mắt. Bố cô gục đầu lên vô lăng mới. Hai nhà gặp nhau. Bánh dừa. **Vật tay**: anh để bố cô thắng vì "nghe thấy bác thở". Bố ho ra máu, nhập viện, chẩn đoán phải nghỉ 6 tháng. Anh nói ngay chuyện em Thu kể. Cô kể hết chuyện năm 17 tuổi cho em Thu.
- **134** (KP): bố cô định bán xe, dặn anh "Đừng để nó gánh một mình". Anh đáp "Con gánh cùng. Nhưng cô ấy phải cho con gánh." Hai người nhảy ở sân bệnh viện cho bố xem ("Nó không kéo con. Thế là đúng"). Lăng muốn trả nợ, mẹ cô từ chối nhưng hứa "nếu không lo được sẽ gọi". Trên xe về, cô lỡ nói "**Bố em không cần biết**" (đúng câu mẹ cô từng nói năm cô 17 tuổi). Cả hai đều chưa quyết.

## 8. Kế hoạch Quyển 4 còn lại (135–156) và các mốc sau

Theo đề cương:
- **133–140**: khác biệt đời sống (đồ đắt so với mặc cả rau, chế độ ăn khoa học so với bánh tráng). **"Anh âm thầm trả nợ cũ cho bố cô, chạm đúng lòng tự trọng; cãi nhau rồi làm lành theo cách người trưởng thành, học chia sẻ thay vì hy sinh vì nhau."** Ra mắt nhà gái với màn vật tay (đã viết ở 133).
- **141–148** (mùa đông): **thí nghiệm đổi cặp**. Liên đoàn ép đổi bạn nhảy hai tuần; hai người sống cùng tòa nhà nhưng không được nhảy cùng nhau. Điểm Rumba của cả hai rơi tự do, bốn điệu kia gần như không đổi, truyền thông gọi là "bằng chứng khoa học". **Đêm được ghép lại là cảnh thân mật dồn nén cả hai tuần.**
- **149–156** (mùa xuân năm 25 tuổi): dọn về sống chung ở căn hộ gần Ngân Sơn, nuôi **mèo tam thể tên Paso**. Những buổi sáng, bếp nhỏ, bồn tắm sau buổi tập, xoa bóp lưng cho nhau mỗi tối. **Chi Thu 19 tuổi làm trợ giảng ở Hải Âu.** (Lưu ý: Chi Thu hiện 17; mùa xuân năm sau mới 18. Có thể để Thu bắt đầu phụ dạy ở Hải Âu từ mùa hè, hoặc ghi chú tuổi linh hoạt.)

Hướng đã gài cho 135–140 (gợi ý, chưa viết):
- Mâu thuẫn hai chiều, cả hai cùng có lỗi:
  - **Cô** lặp lại thói quen cũ: lén trả tiền xe tháng Mười cho bố mà không nói với bố. Tiền hợp đồng nước khoáng về chậm, cô giấu anh chuyện không xoay được.
  - **Anh** phát hiện (ví dụ qua em Thu hoặc Quỹ tín dụng báo xe sắp bị thu hồi) và **âm thầm trả**, phá lời hứa "không làm gì một mình". Có thể vì bố cô nhờ, hoặc vì hạn chót.
  - Cô phát hiện, cãi nhau to (lòng tự trọng, "ba centimet cả đời"). Rồi làm lành kiểu người lớn: cả hai nhận phần lỗi. Lập "quy tắc chia sẻ" (quỹ chung nhỏ? anh cho bố cô vay có giấy tờ, bố tự trả từng kỳ như với dì Lan?). Bố cô tháo bọc vô lăng.
  - Cảnh thân mật "làm lành" là một trong 4–6 cảnh của Q4.
  - Kết đoạn: bố cô bán xe hoặc giữ xe theo cách cả nhà cùng quyết. Cô trả dì Lan 40 triệu và nói trước với bố. Gửi chụp ảnh nước khoáng ở Sương Lĩnh.
- Các sự kiện khác cần lồng vào:
  - Lễ đầy tháng Khúc Hạ Vy (đeo vòng bạc, cả hai cùng đeo).
  - Hết tháng trực vệ sinh.
  - Chuẩn bị **Marivonne (chung kết ngày 22/11)**: 16 nhịp đầu giảm đèn ở Cung Solstice, Elodie là đối thủ. Theo đề cương, họ **chưa vô địch thế giới** (vô địch thế giới và cầu hôn là mùa hạ năm 26 tuổi, chương 186–190). Có thể cho hạng 2–4 ở Marivonne năm nay, rồi Liên đoàn "thí nghiệm đổi cặp" ở mùa đông như một phản ứng sau giải.
  - Tiền thưởng Marivonne: cô định chia nửa cho câu lạc bộ Sương Lĩnh, nửa sửa mái Hải Âu (dột hai chỗ).
  - Tuyết Nghi–Diệc Thần thành đôi.
  - Tiểu Mãn–Hàn Duật cãi nhau đến tận ngày cưới.
  - Bà Thẩm và giám đốc Đàm.

Các mốc lớn còn lại (đề cương, phần niên biểu):
- **Q5 (157–190)**, xuân năm 25 đến hạ năm 26: giới tuyển thủ, cặp trẻ 15 tuổi, show thực tế, sinh nhật 26 của cô. Mùa thu: **chấn thương tái phát**. **Vô địch thế giới và cầu hôn ở Cung Solstice, Marivonne, mùa hạ năm 26 (chương 186–190)**, ruy băng đỏ buộc nhẫn.
- **Q6 (191–212)**, 26 đến 30 tuổi: **đám cưới đầu đông năm 27 tuổi (199–206)**. Váy cưới có hai bảng tên đồng phục trong lớp lót. "Nhịp Thứ Tư" nhảy trọn vẹn từ nhịp hai trước hai nhà, cô Tuệ ngồi hàng đầu, mở băng mặt A và mặt B. Thiên Du và Tô Linh lớn lên dưới bóng "Phong Hạ". **Mèo Paso**.
- **Phiên ngoại**: 8 chương, được dùng POV nhân vật phụ.

## 9. Kỹ thuật

- Cấu trúc thư mục: `quyen-N/chuong-XXX.md` (Quyển 1 dùng `chuong-01`…`chuong-36`, từ Quyển 2 dùng số không có số 0 đứng trước). Mỗi quyển có `README.md` gồm bảng **Chương | Tên chương | Điểm nhìn | Mốc thời gian**. Dòng đầu mỗi chương: `# Chương N: Tên chương`.
- Đếm từ: `sed 's/[*#>_-]//g' file.md | wc -w`
- Xuất docx gộp quyển (docx-js cài sẵn toàn cục):
  ```
  NODE_PATH=/opt/node22/lib/node_modules node tools/build-docx.js quyen-4 "Quyển 4: Ba centimet" "Chương 117 – 156" Quyen-4-Ba-centimet.docx
  ```
  Kiểm tra số Heading1:
  ```
  unzip -p FILE.docx word/document.xml | grep -o 'Heading1' | wc -l
  ```
- Commit mẫu:
  ```
  git add quyen-4 && git commit -m "Quyển 4: viết chương 135–140" && git push -u origin claude/peaceful-bardeen-37u691
  ```
  Cuối message thêm hai dòng attribution theo chỉ dẫn của hệ thống.
