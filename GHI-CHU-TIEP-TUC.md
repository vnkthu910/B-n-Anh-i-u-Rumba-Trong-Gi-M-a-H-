# Ghi chú tiếp tục viết – "Bên Anh Điệu Rumba Trong Gió Mùa Hạ"

Tài liệu này tóm tắt toàn bộ phần đã viết (Quyển 1 → Quyển 5, chương 158) và các quy ước, để tiếp tục viết ở một đoạn chat mới. Đọc kèm: `de-cuong.docx` (đề cương gốc của tác giả), `van-an.md`, và `README.md` trong từng thư mục quyển.

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
| 4 | Ba centimet | 117–156 | Xong, đã review, có `Quyen-4-Ba-centimet.docx` |
| 5 | Rumba tĩnh | 157–190 | **Đang viết, xong đến chương 158.** Chương tiếp theo: **159 (POV Ôn Chi Hạ)** |
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
- **Nhân vật mới Q4 (147–152)**: **ông Lư Văn Khánh** (phòng 312, nhạc công già, vợ đã mất, huýt sáo Rumba mỗi chiều, gõ ba tiếng = "ta ở đây, chờ em ra"; bản thu cũ "Phòng hóa trang" thành nhạc bài Rumba mới); **chị Toàn Liên** (em gái bác Toàn, chủ nhà 412); **tiến sĩ Hạ Mẫn**, **Chủ tịch Quách Viễn** (Liên đoàn Quốc gia); **Paso** (mèo tam thể cái, nhặt 24/1, dậm chân khi đòi ăn).
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
  - **Khu tập thể Ngân Hạnh, nhà B, phòng 412** (tầng 4, 14 bậc mỗi tầng, bồn tắm sứ chân sư tử, giường 1m6, gương khung gỗ sồi, rèm xanh navy viền ruy băng đỏ): nhà hai người thuê chung từ 1/1 năm 25 tuổi. Hàng xóm tầng dưới: ông Lư (312).
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

### Quyển 4 (chương 117–156, đã xong): "Ba centimet", từ cuối tháng Sáu năm 24 tuổi đến 25/5 năm sau
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

- **135** (CH): giấy báo kỳ 80. Cô rút hết tiết kiệm 2 năm, nộp ở Quỹ tín dụng Sương Lĩnh ngày 20/9, không ghi chú, bảo mẹ đừng nói với bố, không nói với anh. Nói "không ạ" với bố trước mặt anh ở bệnh viện. Đầy tháng muộn bé Hạ Vy (52 ngày), hai người cùng đeo vòng bạc.
- **136** (KP): em Thu nhắn anh chuyện kỳ 80. Anh chờ cô nói (12 ngày), không hỏi. Khoảng cách Rumba thành 5 phân, anh chờ quá nửa nhịp. Khúc Nam báo bố cô sắp bán xe cho tay buôn (2/3 giá). **Anh mua lại xe đúng giá qua Khúc Nam** (Khúc Nam đứng tên "anh họ"), xe để trong kho nhà Khúc Nam chờ bố cô khỏe mua lại không lãi. Nói dối cô lần thứ ba ("Chuyện câu lạc bộ"). Ghi chú điện thoại thêm dòng "Sau khi bác ký". Tuyết Nghi cảnh báo. Bố cô ký ngày 29/9.
- **137** (CH): bố gọi báo bán xe đúng giá, và đã thấy tên cô ở kỳ 80 ("Lần sau ghi một dòng"). Ở bàn thứ ba (2/10) cô thú nhận chuyện kỳ 80; anh nói anh đã biết 12 ngày, định kể chuyện của mình thì Diêu Mạn đến, anh nói "Ở Sương Lĩnh, sau buổi chụp". Ngày 9/10 chụp quảng cáo nước khoáng trên dốc thứ ba ("Như sắp nói"). Bố cô ở bữa trưa: "Tai thằng Nam đỏ. Tao biết nó nói dối. Tao vẫn ký vì tao mệt." Cô thấy chiếc xe trong kho nhà Khúc Nam (có trái tim sơn móng tay em Thu vẽ năm 10 tuổi).
- **138** (KP): anh dạy em Thu bước Rumba cơ bản dưới giàn bầu (Thu muốn thi sư phạm thể dục). **Cãi nhau trong kho**: "Lần thứ ba. Anh học câu *sau* của em. Anh mua cái mệt của bố em." Cô đi một mình đến khúc quanh dốc thứ ba và nói trước là đi đâu ("Em không giấu"). Bố cô nói với anh: "Mày không nợ tao tiền. Mày nợ tao một câu. Tao được chửi mày. Đấy là phần của tao." và "Không ai nợ ai… để ai cũng được biết mình đang được giúp."
- **139** (CH): về Ngân Sơn ngồi cách hai hàng ghế; anh xóa dòng "Sau khi bác ký". Rumba 7 phân, "đúng mà không ai nhớ". Cô nhảy một mình trong phòng tập. Mẹ cô kể chuyện năm 22 tuổi, nộp viện phí cho bà nội lén bố, cãi nhau 3 ngày, ngày thứ tư ra cảng đứng xếp hàng cạnh bố ("Em gánh cùng. Anh phải cho em gánh."). Em Thu kể bố đang viết giấy "Kỳ thứ nhất". Trang 142 cô viết thêm: "Lần thứ nhất cãi nhau. Ngày thứ năm. Chậm hơn mẹ một ngày." Một giờ sáng: "Cốc. Cốc. Cốc." Hẹn 5h30 ở cây ngân hạnh thứ bảy, "cùng lúc".
- **140** (KP): **làm lành**: cùng xin lỗi cùng lúc; cô nhận 3 lỗi, anh nhận 4 lỗi. Quy tắc mới: nói trước, kể cả chuyện chắc chắn bị cấm; cấm thì cãi; cùng tìm cách. Bố cô trả lại tiền xe từng kỳ không lãi, anh nhận và cất giấy. Cô trả dì Lan 40 triệu sau khi nói với bố. Hai người cùng tháo khăn mận chín khỏi cây ngân hạnh thứ bảy (cây đã tự đứng được), trả bà Thẩm. Rumba trở lại 3 phân, có giẫm chân, "năm sau họ sẽ nhớ tên". **Cảnh thân mật thứ ba (làm lành)** ở nhà nghỉ ven hồ Ngân Sơn ngày 18/10: cô đặt phòng, "nói to lên mọi thứ". **Lần đầu tiên cô xoa lưng cho anh.** Giấy của bố: "Kỳ thứ nhất. Cảm ơn mày. Thằng ngốc." Sáng 19/10 cô gọi bố nói chuyện dì Lan, anh ngồi cạnh.

- **141** (CH): gọi bố xin phép trả dì Lan ("Mày ngu… Cả nhà này ngu. Trả đi. Nhưng không trả một mình."). Tờ giấy thứ 53 "Kỳ cuối", dì Lan ghi "Đã nhận đủ. Không ai nợ ai", đóng 53 tờ thành tập bìa lụa đỏ, Tết sẽ trao bố. Quảng cáo nước khoáng "Cho những điều chưa kịp nói" đạt 4 triệu lượt xem; Bé Sương đoán đúng ("có tớ đây"). Cô Tuệ gọi: em Thu xin hè sau phụ dạy ở Hải Âu; mái dột, nước chảy dọc vết nứt gương. Tập 16 nhịp trong bóng tối hoàn toàn. 16/11 bay đi Marivonne, bố gửi 10 chiếc bánh dừa khô ("Để dành không được. Ăn đi. Đứng cạnh nó.").
- **142** (KP): Marivonne (cầu đá, sông, Cung Solstice trên đồi). Isadora, Tobias, bé Mira một tuổi. Thầy Lucien cho xem sổ ghi năm anh 17 tuổi ("nếu tìm được người ấy, sẽ đứng ở Solstice; nếu không, dừng ở hạng sáu"). Thử đèn 19/11, kỹ thuật viên vỗ tay. Vòng loại, tứ kết (Tuyết Nghi–Diệc Thần lần đầu vào sâu). Đêm 20/11 cả hai nói trước nỗi sợ: anh sợ thắng (nhảy cho mẹ), cô sợ thua (tiền sửa mái). Ăn bánh dừa khô. "Mười sáu nhịp đầu nhảy cho mình."
- **143** (CH): chung kết 22/11, 16 nhịp tối. Tám nhịp cuối: cô ngửa tay anh lên rồi đặt tay mình. **Rumba 9 số một** (lần đầu trong lịch sử giải với cặp không vô địch). **Tổng sắp hạng 3** (Samba 4, Cha cha 2, Paso 4, Jive 3). Vô địch: Elodie–Bastien. Nhì: Valdren–Ostrova (Marivonne). Tuyết Nghi–Diệc Thần hạng 6. Tuyết Nghi hôn má Diệc Thần. Elodie giơ ba ngón. Lăng xuống hàng đầu vỗ tay ba cái. Cô Tuệ kể sổ điểm danh năm 6 tuổi ghi "Hai đứa này. Chín số một. Một ngày nào đó." Không thay tấm gương nứt. Anh hẹn "lần sau" ở Marivonne sẽ nói một điều (cài cho cầu hôn).
- **144** (KP): họp Liên đoàn Quốc gia (Chủ tịch **Quách Viễn**, 68 tuổi; **tiến sĩ Hạ Mẫn**, tiểu ban khoa học thể thao). Biểu đồ Rumba chênh lệch 4,8 điểm so với các điệu khác. **Biên bản số 17**: thí nghiệm đổi cặp 1–14/12 ở trại tập huấn mùa đông Vân Đình. Tạ–Lâm Tuyết Nghi và Ôn–Chu Diệc Thần, áo cảm biến; ngày 15/12 giải kiểm tra nội bộ. Lăng (không biểu quyết) kể chuyện mình: chờ Trịnh Quân bốn năm, nhảy với người khác ba năm, không bao giờ tới Marivonne. Bốn người bàn riêng rồi đồng ý (Tuyết Nghi: "Ngày 16 tôi đổi lại"). Lăng dặn: "Đừng nhắm mắt. Tuyết Nghi đáng được nhìn." Đêm 30/11 nhảy "Nhịp Thứ Tư" lần cuối trước Vân Đình, lưng chạm lưng. 14 ngày = 2.016.000 nhịp.
- **145** (CH): trại Vân Đình, cô phòng 307, anh phòng 407 ngay trên đầu (gõ trần/sàn). Nhảy với Diệc Thần 9 phân, Diệc Thần không chờ nửa nhịp ("không biết chờ cô ấy"); sau bốn ngày thì học được. Ăn chung nhà ăn, giẫm chân nhau dưới gầm bàn. Diệc Thần thú nhận với Tuyết Nghi chuyện gãy cổ tay phải năm 19 tuổi, **Tuyết Nghi trả lời "Phải"** (4/12). Báo chí rò rỉ: Rumba hai cặp tụt hạng 12 và 14, "bằng chứng khoa học". Đêm 7/12 hai người cùng nhảy một mình, cách nhau một tầng.
- **146** (KP): nhảy với Tuyết Nghi 8 phân. Tuyết Nghi: "Cậu nhìn tôi, nhưng cậu chờ người khác… Không ai nhảy với ai." Thầy Nghiêm bảo Tuyết Nghi dẫn tám nhịp bằng "cái của cô" (cô giơ tay về phía bức tường ngăn hai phòng tập). Tiến sĩ Hạ cho anh xem dữ liệu nhịp tim: đêm 7/12 nhịp tim hai người trùng nhau qua 20 phân bê tông; chị không ghi vào báo cáo (chị đã ly hôn bạn nhảy Standard cũ). Video Bé Sương ở Sương Lĩnh tự làm "thí nghiệm" rồi bỏ đi về phía Khúc Bảo: "Con không đổi" (gợi lại Q1 chương 11: anh 12 tuổi, thầy Bạch bắt nhảy với An Nhiên một tháng). Bố cô lần đầu nhắn vào nhóm chat. Đêm 12/12 nhảy Rumba qua lớp bê tông, cùng gõ, đặt tay lên trần/sàn. Đêm 14/12, mai là giải kiểm tra.

- **147** (CH): giải kiểm tra 15/12. Tám nhịp cuối mỗi người giơ tay về phía bạn nhảy của mình cách 12 m. Rumba hạng 11 và 13. Tiến sĩ Hạ: "Liên đoàn không cần dự phòng… cần bảo vệ nó"; phụ lục nhịp tim không chính thức khép biên bản; Chủ tịch Quách xin lỗi Lăng. Cha cha chia tay của Diệc Thần (yêu Tuyết Nghi từ năm 21 tuổi). 18h trán chạm trán ở hành lang; thầy Nghiêm đưa chìa khóa phòng tập phía tây (tắt camera đến nửa đêm).
- **148** (KP): nhảy ở phòng tập phía tây; trả chìa khóa ("Mười bốn ngày. Tôi không ngủ được đêm nào", hủy chạy sáng). **Cảnh thân mật thứ tư** ở phòng 407 (tay đặt lên chỗ sàn từng gõ). Xoa lưng cho nhau ("Kỳ thứ hai"). Cô đề nghị thuê nhà ở chung ("Anh có được cấm không?" – "Không cấm"). 16/12 Tố Nga đo 3 phân, "tiến sĩ Hạ không có từ". Diệc Thần–Tuyết Nghi 4 phân. Khóe miệng thầy Nghiêm cong 2 mm.
- **149** (CH): cãi nhau trên xe buýt, chốt: thuê nhà theo sức người nghèo hơn, chia đôi. **Sổ xanh** ghi luật: "Hạ đi chợ, Phong rửa bát, bánh tráng thứ Sáu Hạ trả, bánh dừa 23/6 Phong mua không chia". 18/12 Tố Nga đặt tên bài Rumba mới là "?". Chị **Toàn Liên** (em gái bác Toàn) cho thuê **Khu tập thể Ngân Hạnh, nhà B, phòng 412**, tầng 4, 14 bậc mỗi tầng, bồn tắm sứ chân sư tử. "Ai trả tiền nhà?" – "Hai người / Chia đôi". Nhảy trong căn hộ trống, **ông Lư** (phòng 312) huýt sáo Rumba. Ký hợp đồng 1/1, tên cô đứng trước.
- **150** (KP): dọn nhà 10/1. Bà Thẩm tặng khăn mận chín đã giặt. Lăng gửi gương khung gỗ sồi ("hai đứa phải tự làm chứng cho nhau", "Giống sàn Solstice"). Mẹ cô gửi rèm xanh navy viền ruy băng đỏ (Thu khâu), bố cô gửi "Kỳ thứ ba". Giường 1m6 (ngủ giữa). Anh rửa bát ("Lần sau anh né"). Bồn tắm, nhảy trước gương, ông Lư gõ ba tiếng. Sáng: nửa cà phê nửa sữa. Ông Lư kể ba tiếng gõ nghĩa là "ta ở đây, chờ em ra" với người vợ đã mất.
- **151** (CH): 24/1 mèo con tam thể cái 3 tháng dưới gầm cầu thang dậm chân (appel), đặt tên **Paso**. Tắm bồn, vết cào dưới ruy băng. 5h sáng Paso dậm chân. Sổ thú y "Chủ nuôi: Ôn Chi Hạ, Tạ Kỳ Phong", chia đôi tiền. 26/1 bài Rumba mới của Tố Nga dùng bản thu cũ "Phòng hóa trang" của **ông Lư Văn Khánh**; mở đầu đứng cạnh nhau, "Nhịp một: dậm chân. Như con mèo tên Paso." 28/1 cô Tuệ báo mái Hải Âu đã sửa bằng tiền thưởng Marivonne (hai người chia đôi), nước mưa làm lộ chữ **"P. H."** anh khắc bằng compa năm 12 tuổi cạnh vết nứt gương.
- **152** (KP): Tết muộn (năm nhuận), 28 Tết = 14/2. Tàu đêm mang Paso ("Lần đầu đi tàu… Em cũng sợ"). Bà nội gõ gậy ba tiếng, Paso dậm ba cái; ông nội xưa cũng mang về một con mèo tam thể, chết năm Phong 1 tuổi. 30 Tết dì Lan trao tập 53 tờ bìa lụa đỏ cho bố cô: "Anh không nợ ai. Anh trả đủ rồi. Từ tờ thứ nhất." Anh hứa đóng tập 36 tờ của mình (đã nhận 3, còn 33). Giao thừa: em Thu (18) tuyên bố thi sư phạm thể dục ở Ngân Sơn tháng Sáu, cuối tuần làm trợ giảng Hải Âu (cô Tuệ đồng ý); bố cô: "Đỗ thì bố chở… Tháng Ba bố được lái đèo". Lăng nhắn: bà đặt hai tấm gương, giữ một; anh mời mùng hai đến phòng 412. Mùng một ở Hải Âu: xem "P. H.", cô Tuệ kể năm ấy đứng ngoài cửa chờ anh khắc xong. Nhảy bài mới, cô huýt sáo (chưa có tám nhịp cuối). Trang cuối sổ điểm danh: "Mùng một Tết. Hai đứa này. Không cần số nào nữa." Thu mang Paso "xông đất Hải Âu".

- **153** (CH): mùng hai Tết (18/2) về Ngân Sơn. Bố nhắn "Kỳ thứ tư. Tháng sau. Bảo nó." Lăng đến 412, đếm 56 bậc ("Mười bốn không chia hết cho ba"). Ở chiếu nghỉ tầng 3 Lăng nhận ra ông Lư: ông thổi kèn một cho bài Waltz chung kết cuối cùng của Lăng (số đeo lưng **17**, 23 năm trước), cố ý thổi chậm nửa nhịp ở ô nhịp 32 vì "cậu kia không chờ được, ta chờ thay"; Lăng cúi chào dàn nhạc trước giám khảo. **Nửa nhịp Lăng dạy cô năm 9 tuổi bắt nguồn từ đây.** Sổ xanh: luật 7 (cãi không quá nửa đêm), Lăng tự viết **luật 8 "Mẹ đến: mẹ không rửa bát. Mẹ lau bàn."** Lăng đặt hai gương gỗ sồi, giữ một (thay tấm ảnh cầm cúp). Ông Lư thổi Waltz bằng kèn, anh nhảy Waltz với mẹ; Lăng cúi chào về phía phòng 312. Lăng ngồi dưới sân đến nửa đêm nghe ông thổi lại ô nhịp 32 (kể lại qua chuỗi bà Thẩm–giám đốc Đàm–bác Toàn–chị Toàn Liên–ông Lư).
- **154** (KP): 13/3 tin nhắn thứ **315** vào điện thoại vỏ xanh: "Một năm. Vẫn đón." Anh trả lời "Ừ. Tớ về rồi." Tố Nga giao tám nhịp cuối và tên bài cho hai người (Giải mùa xuân 25/5). Tô Linh không ăn trưa; luật cân thứ Hai của **ông Đổng** (trưởng ban chuyên môn mới); anh chia nửa ổ bánh mì. 15/3 ở kho Khúc Nam: giấy "Kỳ thứ tư… Hôm nay tao lấy xe. Còn ba mươi hai kỳ", bố lắp lại bọc vô lăng, lái lên Đỉnh Mây; hai người nhảy trên bãi đất đỏ theo cát-xét trong xe; bố: **"Hết đèo thì xuống. Nhà ở dưới kia."** Đêm dưới giàn bầu: bố hỏi "Mày định bắt nó chờ đến lúc ấy à?", anh nói **Marivonne, mùa hạ năm sau**; bố: "Cái này giấu được. Tao cho phép… Đừng mua cái đắt. Nó mặc cả cả cái nhẫn đấy."
- **155** (CH): tháng Tư, cô ra cửa đón mỗi lần anh về, gõ ba tiếng lên ngực anh, trán chạm trán. **Tám nhịp cuối**: buông tay – quay lưng về giám khảo – bốn bước cạnh nhau về cuối sàn – anh dừng, cô quay lại – ba tiếng gõ lên ngực – trán chạm trán – đứng ("ở nhà"). Ông Lư gõ ba tiếng dưới sàn. Tố Nga xóa dấu hỏi, đặt tên **"Về"** ("Tám nhịp cuối: Ôn Chi Hạ – Tạ Kỳ Phong. Không phải tôi"). Tuyết Nghi: "Người nào đã từng có nhà" sẽ không trừ điểm. Chợ Ngân Hạnh (bà Chín), em Thu thi thử năng khiếu, chọn khiêu vũ, gọi anh là "anh rể tương lai"; bố chở chuyến hàng đầu tiên. **Cảnh thân mật thứ năm của Q4** (đêm mưa tháng Tư, chậm, cô dẫn), xoa lưng cho nhau ("Cái này em không đếm. Đếm là còn hết"). Ban tổ chức: "Không có điều nào [cấm quay lưng]. Vì chưa ai làm."
- **156** (KP): 25/5 Giải mùa xuân. Ông Lư mặc com-lê, mang hộp kèn đi xem; Lăng chỉnh nơ cho ông, ngồi hàng đầu cạnh ông. Ông Đổng đăng ký cho Thiên Du–Tô Linh 4 giải trong 6 tuần; hợp đồng thầy Nghiêm hết hạn tháng 12 "xem xét gia hạn". Tuyết Nghi đưa Tô Linh cốc sữa con gấu ("Tôi chỉ không muốn nhìn thấy mình năm mười lăm tuổi nữa"). Số đeo lưng 17. Bài "Về": ông Lư gõ gậy ba tiếng, rồi cả khán đài vỗ tay; hai người đứng thêm tám nhịp, rồi cúi chào ông Lư trước. **Rumba 8/9 số một, vô địch giải mùa xuân**; Tuyết Nghi–Diệc Thần nhì. Thầy Nghiêm: "Mai nghỉ." Mira nói từ đầu tiên "Phong". **Luật số 9**: "Có một chuyện Phong chưa nói. Bố cho phép giấu… Đến Marivonne." Cô viết: "Hạ đồng ý. Không hỏi. Chờ. Hạ cũng có một chuyện. **Mẹ cho phép giấu. Đến sinh nhật Phong.**" (chưa quyết là chuyện gì: gợi ý cô và Lăng chuẩn bị một điều cho 7/9). Hết Q4.

### Quyển 5 (chương 157–190): "Rumba tĩnh", từ tháng Sáu năm 25 tuổi
- Lưu ý tuổi: cô tròn **25** ngày 23/6 năm nay (đề cương ghi "sinh nhật 26" ở mục 157–166; bản thảo giữ lệch một năm như Q4). Vô địch thế giới và cầu hôn ở Marivonne "mùa hạ năm sau" (anh đã nói với bố cô). Marivonne năm trước tổ chức chung kết 22/11; Q5 cần thống nhất lịch (có thể giải năm sau dời sang đầu hạ, hoặc chuyển cầu hôn sang mùa đông).
- **157** (CH): 3/6, 5h55 kiểm tra doping ngoài thi đấu tại 412 (hệ thống khai báo nơi ở; kiểm tra viên nữ **mã số 0217**, có mèo mướp 12 tuổi, nhìn lên trần, "Lần sau tôi vẫn gõ bốn tiếng"). Anh gõ ba tiếng lên cửa "ghi đè". Họp với **ông Đổng Khải** (50 tuổi, cựu HLV điền kinh, đồng hồ bấm giờ thép, "Mười phút"; từng có ba nhà vô địch, hai người bỏ nghề năm 20 tuổi): doping mỗi tháng, phun nhuộm da bảng màu số 6, show thực tế **"Sàn Đôi"** (đài truyền hình Ngân Sơn, 12 tập, 4 tháng, tiền đủ đưa 3 cặp đi Marivonne) muốn quay cả cặp nhỏ; dọa hợp đồng thầy Nghiêm. Cân: cô tăng 1,2 kg ("Em sống chung với người nấu ăn ngon"; không nhịn ăn). Dạy Tô Linh Cha cha, kể chuyện thuốc giảm đau ("Giấu là thứ đắt nhất"). Diêu Mạn gọi cô trước về Sàn Đôi (phí = 6 tháng hợp đồng nước khoáng; đủ lương Khúc Nam 3 năm). Cô gõ bốn tiếng cửa phòng tắm: "Chưa quyết. Nói trước." Anh cũng có chuyện (Thiên Du).
- **158** (KP): Thiên Du kể Tô Linh nôn sau bữa ăn 3 tháng, ngất 30 giây; anh không hứa giữ bí mật. **Luật số 10**: "Chuyện của người khác: giữ được thì giữ. Có người đang đau thì không giữ." Điều kiện nhận Sàn Đôi: không quay phòng ngủ/phòng tắm/sau 10 giờ, không quay doping/cân/nhuộm da, **cặp nhỏ không lên hình**. Phòng thầy Nghiêm: thầy gọi bác sĩ Văn, bác sĩ tâm lý, mẹ Tô Linh; thầy kể năm 16 tuổi giữ bí mật đau gối của bạn nhảy một năm, cô ấy không nhảy được nữa. Họp với đạo diễn **Tạ Thục Vy** (không họ hàng): Tuyết Nghi xông vào, nhận kể chuyện rối loạn ăn uống của mình lên truyền hình thay tuyến cặp nhỏ ("Tôi ghét cái đồng hồ kia hơn"). Ông Đổng đọc giấy bác sĩ, cất đồng hồ vào túi: Tô Linh nghỉ 6 tuần; "người thứ hai mở tiệm bánh… Người thứ ba thì không." Thiên Du nhảy Paso một mình, dẫn khoảng trống ("Đúng thì thường đau"). Tô Linh nhắn mượn máy mẹ: "Phòng 412 là tầng mấy ạ?"

## 8. Kế hoạch tiếp theo

> Tiếp theo (Q5, 159–166, hè–thu năm 25 tuổi): Tô Linh đến 412 (Tuyết Nghi cùng giúp); quay Sàn Đôi (bếp, Paso, ông Lư; Tuyết Nghi–Diệc Thần kể chuyện trước camera, có thể thành đôi chính thức); phun nhuộm da; sinh nhật 25 của cô 23/6 (đôi giày Estherwyn cỡ 36,5, hộp bánh dừa thứ 21 anh mua); em Thu thi đại học tháng Sáu, ngủ nhờ 412, đỗ sư phạm thể dục Ngân Sơn, cuối tuần trợ giảng Hải Âu; Giải mùa hè 28/6; ghế HLV của thầy Nghiêm (ông Đổng, Lăng ở Liên đoàn thành phố); sinh nhật anh 7/9 và "chuyện Hạ giấu, mẹ cho phép" (luật 9). Mùa thu (167–176): **chấn thương cột sống tái phát ba tháng trước giải thế giới; cô nói với anh ngay đêm đầu tiên**; anh: "Không thi được thì không thi. Nhưng em không được tự đi một mình nữa." Bố cô trả mỗi tháng một kỳ (kỳ 4 tháng Ba; còn 32 kỳ tính từ tháng Ba).

> Mạch 133–140 (nợ nhà Ôn, làm lành) đã xong. Còn treo: hãng nước khoáng trả tiền cuối tháng Mười; em Thu tập Rumba, muốn thi sư phạm thể dục (cài sẵn cho vai trợ giảng ở Hải Âu); chiếc xe tải trong kho Khúc Nam; giày Estherwyn giữ đến sinh nhật cô; chuẩn bị Marivonne (chung kết 22/11).

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
