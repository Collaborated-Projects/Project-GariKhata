//polygon
var array_polygons_plotprofile = [];
var pointer_polygons_plotprofile = null;

//rect
var array_rects_plotprofile = [];
var pointer_rects_plotprofile = null;



//Tooltip
var tip = null;

function plotprofileData()
{
	//rect
	var rect0 = [createVector(585, 452), createVector(40, 44)];
	pointer_rects_plotprofile = new Rectangle(rect0, "stroke");
	array_rects_plotprofile[0] = pointer_rects_plotprofile;

	var rect1 = [createVector(558, 313), createVector(21, 58)];
	pointer_rects_plotprofile = new Rectangle(rect1, "stroke");
	array_rects_plotprofile[1] = pointer_rects_plotprofile;

	var rect2 = [createVector(629, 15), createVector(22, 109)];
	pointer_rects_plotprofile = new Rectangle(rect2, "stroke");
	array_rects_plotprofile[2] = pointer_rects_plotprofile;

	var rect3 = [createVector(652, 15), createVector(22, 50)];
	pointer_rects_plotprofile = new Rectangle(rect3, "stroke");
	array_rects_plotprofile[3] = pointer_rects_plotprofile;

	var rect4 = [createVector(193, 375), createVector(14, 53)];
	pointer_rects_plotprofile = new Rectangle(rect4, "stroke");
	array_rects_plotprofile[4] = pointer_rects_plotprofile;

	var rect5 = [createVector(155, 375), createVector(17, 55)];
	pointer_rects_plotprofile = new Rectangle(rect5, "stroke");
	array_rects_plotprofile[5] = pointer_rects_plotprofile;

	var rect6 = [createVector(445, 518), createVector(19, 42)];
	pointer_rects_plotprofile = new Rectangle(rect6, "stroke");
	array_rects_plotprofile[6] = pointer_rects_plotprofile;

	var rect7 = [createVector(394, 518), createVector(23, 43)];
	pointer_rects_plotprofile = new Rectangle(rect7, "stroke");
	array_rects_plotprofile[7] = pointer_rects_plotprofile;

	var rect8 = [createVector(338, 513), createVector(28, 50)];
	pointer_rects_plotprofile = new Rectangle(rect8, "stroke");
	array_rects_plotprofile[8] = pointer_rects_plotprofile;

	//polygon
	var polygon0 = [createVector(508, 564), createVector(516, 564), createVector(775, 552), createVector(792, 552), createVector(792, 443), createVector(772, 443), createVector(508, 446), createVector(508, 564)];
	pointer_polygons_plotprofile = new Polygon(polygon0, "stroke");
	array_polygons_plotprofile[0] = pointer_polygons_plotprofile;

	var polygon1 = [createVector(471, 771), createVector(463, 771), createVector(11, 754), createVector(3, 754), createVector(3, 744), createVector(3, 612), createVector(16, 612), createVector(473, 594), createVector(473, 603), createVector(471, 771)];
	pointer_polygons_plotprofile = new Polygon(polygon1, "stroke");
	array_polygons_plotprofile[1] = pointer_polygons_plotprofile;

	var polygon2 = [createVector(506, 590), createVector(505, 775), createVector(517, 775), createVector(775, 796), createVector(791, 796), createVector(791, 570), createVector(772, 570), createVector(513, 590), createVector(506, 590)];
	pointer_polygons_plotprofile = new Polygon(polygon2, "stroke");
	array_polygons_plotprofile[2] = pointer_polygons_plotprofile;

	var polygon3 = [createVector(472, 570), createVector(463, 570), createVector(11, 587), createVector(3, 587), createVector(3, 475), createVector(15, 474), createVector(472, 451), createVector(472, 570)];
	pointer_polygons_plotprofile = new Polygon(polygon3, "stroke");
	array_polygons_plotprofile[3] = pointer_polygons_plotprofile;

	var polygon4 = [createVector(0, 444), createVector(15, 444), createVector(45, 445), createVector(472, 423), createVector(472, 305), createVector(463, 305), createVector(296, 312), createVector(61, 326), createVector(12, 359), createVector(0, 359), createVector(0, 444)];
	pointer_polygons_plotprofile = new Polygon(polygon4, "stroke");
	array_polygons_plotprofile[4] = pointer_polygons_plotprofile;

	var polygon5 = [createVector(789, 411), createVector(771, 411), createVector(508, 417), createVector(507, 308), createVector(517, 308), createVector(776, 302), createVector(789, 302), createVector(789, 411)];
	pointer_polygons_plotprofile = new Polygon(polygon5, "stroke");
	array_polygons_plotprofile[5] = pointer_polygons_plotprofile;

	var polygon6 = [createVector(789, 271), createVector(789, 163), createVector(770, 163), createVector(640, 161), createVector(517, 170), createVector(507, 170), createVector(507, 281), createVector(571, 281), createVector(653, 277), createVector(789, 271)];
	pointer_polygons_plotprofile = new Polygon(polygon6, "stroke");
	array_polygons_plotprofile[6] = pointer_polygons_plotprofile;

	var polygon7 = [createVector(514, 136), createVector(514, 39), createVector(576, 9), createVector(589, 6), createVector(789, 0), createVector(789, 132), createVector(598, 132), createVector(514, 136)];
	pointer_polygons_plotprofile = new Polygon(polygon7, "stroke");
	array_polygons_plotprofile[7] = pointer_polygons_plotprofile;

	var polygon8 = [createVector(482, 92), createVector(476, 277), createVector(353, 280), createVector(119, 291), createVector(115, 291), createVector(135, 271), createVector(475, 92), createVector(482, 92)];
	pointer_polygons_plotprofile = new Polygon(polygon8, "stroke");
	array_polygons_plotprofile[8] = pointer_polygons_plotprofile;

	var polygon9 = [createVector(515, 599), createVector(566, 595), createVector(566, 708), createVector(515, 708), createVector(515, 599)];
	pointer_polygons_plotprofile = new Polygon(polygon9, "stroke");
	array_polygons_plotprofile[9] = pointer_polygons_plotprofile;

	var polygon10 = [createVector(684, 587), createVector(660, 588), createVector(660, 696), createVector(684, 696), createVector(684, 587)];
	pointer_polygons_plotprofile = new Polygon(polygon10, "stroke");
	array_polygons_plotprofile[10] = pointer_polygons_plotprofile;

	var polygon11 = [createVector(720, 583), createVector(684, 587), createVector(684, 696), createVector(720, 696), createVector(720, 583)];
	pointer_polygons_plotprofile = new Polygon(polygon11, "stroke");
	array_polygons_plotprofile[11] = pointer_polygons_plotprofile;

	var polygon12 = [createVector(773, 579), createVector(720, 583), createVector(720, 696), createVector(773, 696), createVector(773, 579)];
	pointer_polygons_plotprofile = new Polygon(polygon12, "stroke");
	array_polygons_plotprofile[12] = pointer_polygons_plotprofile;

	var polygon13 = [createVector(773, 785), createVector(714, 780), createVector(714, 696), createVector(773, 696), createVector(773, 785)];
	pointer_polygons_plotprofile = new Polygon(polygon13, "stroke");
	array_polygons_plotprofile[13] = pointer_polygons_plotprofile;

	var polygon14 = [createVector(515, 764), createVector(714, 780), createVector(714, 696), createVector(566, 701), createVector(566, 708), createVector(515, 708), createVector(515, 764)];
	pointer_polygons_plotprofile = new Polygon(polygon14, "stroke");
	array_polygons_plotprofile[14] = pointer_polygons_plotprofile;

	var polygon15 = [createVector(566, 595), createVector(622, 591), createVector(622, 699), createVector(566, 701), createVector(566, 595)];
	pointer_polygons_plotprofile = new Polygon(polygon15, "stroke");
	array_polygons_plotprofile[15] = pointer_polygons_plotprofile;

	var polygon16 = [createVector(660, 588), createVector(622, 591), createVector(622, 699), createVector(660, 698), createVector(660, 588)];
	pointer_polygons_plotprofile = new Polygon(polygon16, "stroke");
	array_polygons_plotprofile[16] = pointer_polygons_plotprofile;

	var polygon17 = [createVector(514, 453), createVector(514, 552), createVector(553, 550), createVector(553, 453), createVector(514, 453)];
	pointer_polygons_plotprofile = new Polygon(polygon17, "stroke");
	array_polygons_plotprofile[17] = pointer_polygons_plotprofile;

	var polygon18 = [createVector(585, 452), createVector(585, 501), createVector(553, 501), createVector(553, 453), createVector(585, 452)];
	pointer_polygons_plotprofile = new Polygon(polygon18, "stroke");
	array_polygons_plotprofile[18] = pointer_polygons_plotprofile;

	var polygon19 = [createVector(585, 549), createVector(553, 550), createVector(553, 501), createVector(585, 501), createVector(585, 549)];
	pointer_polygons_plotprofile = new Polygon(polygon19, "stroke");
	array_polygons_plotprofile[19] = pointer_polygons_plotprofile;

	var polygon20 = [createVector(626, 548), createVector(585, 549), createVector(585, 496), createVector(626, 496), createVector(626, 548)];
	pointer_polygons_plotprofile = new Polygon(polygon20, "stroke");
	array_polygons_plotprofile[20] = pointer_polygons_plotprofile;

	var polygon21 = [createVector(657, 451), createVector(657, 498), createVector(626, 498), createVector(626, 452), createVector(657, 451)];
	pointer_polygons_plotprofile = new Polygon(polygon21, "stroke");
	array_polygons_plotprofile[21] = pointer_polygons_plotprofile;

	var polygon22 = [createVector(657, 547), createVector(626, 548), createVector(626, 498), createVector(657, 498), createVector(657, 547)];
	pointer_polygons_plotprofile = new Polygon(polygon22, "stroke");
	array_polygons_plotprofile[22] = pointer_polygons_plotprofile;

	var polygon23 = [createVector(709, 451), createVector(709, 545), createVector(657, 547), createVector(657, 451), createVector(709, 451)];
	pointer_polygons_plotprofile = new Polygon(polygon23, "stroke");
	array_polygons_plotprofile[23] = pointer_polygons_plotprofile;

	var polygon24 = [createVector(732, 450), createVector(732, 498), createVector(709, 498), createVector(709, 451), createVector(732, 450)];
	pointer_polygons_plotprofile = new Polygon(polygon24, "stroke");
	array_polygons_plotprofile[24] = pointer_polygons_plotprofile;

	var polygon25 = [createVector(732, 544), createVector(709, 545), createVector(709, 498), createVector(732, 498), createVector(732, 544)];
	pointer_polygons_plotprofile = new Polygon(polygon25, "stroke");
	array_polygons_plotprofile[25] = pointer_polygons_plotprofile;

	var polygon26 = [createVector(773, 450), createVector(773, 499), createVector(732, 498), createVector(732, 450), createVector(773, 450)];
	pointer_polygons_plotprofile = new Polygon(polygon26, "stroke");
	array_polygons_plotprofile[26] = pointer_polygons_plotprofile;

	var polygon27 = [createVector(773, 542), createVector(732, 544), createVector(732, 498), createVector(773, 499), createVector(773, 542)];
	pointer_polygons_plotprofile = new Polygon(polygon27, "stroke");
	array_polygons_plotprofile[27] = pointer_polygons_plotprofile;

	var polygon28 = [createVector(514, 315), createVector(515, 382), createVector(537, 382), createVector(537, 315), createVector(514, 315)];
	pointer_polygons_plotprofile = new Polygon(polygon28, "stroke");
	array_polygons_plotprofile[28] = pointer_polygons_plotprofile;

	var polygon29 = [createVector(514, 413), createVector(515, 382), createVector(537, 382), createVector(537, 412), createVector(514, 413)];
	pointer_polygons_plotprofile = new Polygon(polygon29, "stroke");
	array_polygons_plotprofile[29] = pointer_polygons_plotprofile;

	var polygon30 = [createVector(558, 313), createVector(558, 375), createVector(537, 375), createVector(537, 315), createVector(558, 313)];
	pointer_polygons_plotprofile = new Polygon(polygon30, "stroke");
	array_polygons_plotprofile[30] = pointer_polygons_plotprofile;

	var polygon31 = [createVector(558, 411), createVector(537, 412), createVector(537, 375), createVector(558, 375), createVector(558, 411)];
	pointer_polygons_plotprofile = new Polygon(polygon31, "stroke");
	array_polygons_plotprofile[31] = pointer_polygons_plotprofile;

	var polygon32 = [createVector(580, 411), createVector(558, 411), createVector(558, 372), createVector(580, 372), createVector(580, 411)];
	pointer_polygons_plotprofile = new Polygon(polygon32, "stroke");
	array_polygons_plotprofile[32] = pointer_polygons_plotprofile;

	var polygon33 = [createVector(629, 312), createVector(629, 372), createVector(580, 372), createVector(580, 313), createVector(629, 312)];
	pointer_polygons_plotprofile = new Polygon(polygon33, "stroke");
	array_polygons_plotprofile[33] = pointer_polygons_plotprofile;

	var polygon34 = [createVector(601, 409), createVector(601, 372), createVector(580, 372), createVector(580, 411), createVector(601, 409)];
	pointer_polygons_plotprofile = new Polygon(polygon34, "stroke");
	array_polygons_plotprofile[34] = pointer_polygons_plotprofile;

	var polygon35 = [createVector(629, 409), createVector(629, 372), createVector(601, 372), createVector(601, 409), createVector(629, 409)];
	pointer_polygons_plotprofile = new Polygon(polygon35, "stroke");
	array_polygons_plotprofile[35] = pointer_polygons_plotprofile;

	var polygon36 = [createVector(663, 311), createVector(663, 364), createVector(629, 364), createVector(629, 312), createVector(663, 311)];
	pointer_polygons_plotprofile = new Polygon(polygon36, "stroke");
	array_polygons_plotprofile[36] = pointer_polygons_plotprofile;

	var polygon37 = [createVector(646, 408), createVector(646, 364), createVector(629, 364), createVector(629, 409), createVector(646, 408)];
	pointer_polygons_plotprofile = new Polygon(polygon37, "stroke");
	array_polygons_plotprofile[37] = pointer_polygons_plotprofile;

	var polygon38 = [createVector(663, 408), createVector(663, 364), createVector(646, 364), createVector(646, 408), createVector(663, 408)];
	pointer_polygons_plotprofile = new Polygon(polygon38, "stroke");
	array_polygons_plotprofile[38] = pointer_polygons_plotprofile;

	var polygon39 = [createVector(684, 407), createVector(684, 311), createVector(663, 311), createVector(663, 408), createVector(684, 407)];
	pointer_polygons_plotprofile = new Polygon(polygon39, "stroke");
	array_polygons_plotprofile[39] = pointer_polygons_plotprofile;

	var polygon40 = [createVector(723, 405), createVector(723, 361), createVector(684, 361), createVector(684, 407), createVector(723, 405)];
	pointer_polygons_plotprofile = new Polygon(polygon40, "stroke");
	array_polygons_plotprofile[40] = pointer_polygons_plotprofile;

	var polygon41 = [createVector(723, 310), createVector(723, 361), createVector(684, 361), createVector(684, 311), createVector(723, 310)];
	pointer_polygons_plotprofile = new Polygon(polygon41, "stroke");
	array_polygons_plotprofile[41] = pointer_polygons_plotprofile;

	var polygon42 = [createVector(773, 309), createVector(773, 404), createVector(723, 405), createVector(723, 310), createVector(773, 309)];
	pointer_polygons_plotprofile = new Polygon(polygon42, "stroke");
	array_polygons_plotprofile[42] = pointer_polygons_plotprofile;

	var polygon43 = [createVector(679, 266), createVector(611, 271), createVector(611, 211), createVector(679, 211), createVector(679, 266)];
	pointer_polygons_plotprofile = new Polygon(polygon43, "stroke");
	array_polygons_plotprofile[43] = pointer_polygons_plotprofile;

	var polygon44 = [createVector(679, 170), createVector(615, 170), createVector(611, 211), createVector(679, 211), createVector(679, 170)];
	pointer_polygons_plotprofile = new Polygon(polygon44, "stroke");
	array_polygons_plotprofile[44] = pointer_polygons_plotprofile;

	var polygon45 = [createVector(727, 170), createVector(727, 266), createVector(679, 266), createVector(679, 170), createVector(727, 170)];
	pointer_polygons_plotprofile = new Polygon(polygon45, "stroke");
	array_polygons_plotprofile[45] = pointer_polygons_plotprofile;

	var polygon46 = [createVector(773, 170), createVector(773, 264), createVector(727, 266), createVector(727, 170), createVector(773, 170)];
	pointer_polygons_plotprofile = new Polygon(polygon46, "stroke");
	array_polygons_plotprofile[46] = pointer_polygons_plotprofile;

	var polygon47 = [createVector(615, 170), createVector(611, 271), createVector(521, 271), createVector(521, 207), createVector(560, 207), createVector(560, 174), createVector(615, 170)];
	pointer_polygons_plotprofile = new Polygon(polygon47, "stroke");
	array_polygons_plotprofile[47] = pointer_polygons_plotprofile;

	var polygon48 = [createVector(521, 176), createVector(521, 207), createVector(560, 207), createVector(560, 174), createVector(521, 176)];
	pointer_polygons_plotprofile = new Polygon(polygon48, "stroke");
	array_polygons_plotprofile[48] = pointer_polygons_plotprofile;

	var polygon49 = [createVector(521, 47), createVector(521, 128), createVector(552, 127), createVector(552, 34), createVector(521, 47)];
	pointer_polygons_plotprofile = new Polygon(polygon49, "stroke");
	array_polygons_plotprofile[49] = pointer_polygons_plotprofile;

	var polygon50 = [createVector(590, 17), createVector(552, 34), createVector(552, 127), createVector(590, 125), createVector(590, 17)];
	pointer_polygons_plotprofile = new Polygon(polygon50, "stroke");
	array_polygons_plotprofile[50] = pointer_polygons_plotprofile;

	var polygon51 = [createVector(629, 15), createVector(629, 72), createVector(590, 72), createVector(590, 17), createVector(629, 15)];
	pointer_polygons_plotprofile = new Polygon(polygon51, "stroke");
	array_polygons_plotprofile[51] = pointer_polygons_plotprofile;

	var polygon52 = [createVector(629, 125), createVector(590, 125), createVector(590, 72), createVector(629, 72), createVector(629, 125)];
	pointer_polygons_plotprofile = new Polygon(polygon52, "stroke");
	array_polygons_plotprofile[52] = pointer_polygons_plotprofile;

	var polygon53 = [createVector(675, 125), createVector(675, 66), createVector(652, 66), createVector(652, 125), createVector(675, 125)];
	pointer_polygons_plotprofile = new Polygon(polygon53, "stroke");
	array_polygons_plotprofile[53] = pointer_polygons_plotprofile;

	var polygon54 = [createVector(703, 125), createVector(703, 62), createVector(675, 62), createVector(675, 125), createVector(703, 125)];
	pointer_polygons_plotprofile = new Polygon(polygon54, "stroke");
	array_polygons_plotprofile[54] = pointer_polygons_plotprofile;

	var polygon55 = [createVector(725, 124), createVector(725, 62), createVector(703, 62), createVector(703, 125), createVector(725, 124)];
	pointer_polygons_plotprofile = new Polygon(polygon55, "stroke");
	array_polygons_plotprofile[55] = pointer_polygons_plotprofile;

	var polygon56 = [createVector(747, 124), createVector(747, 62), createVector(725, 62), createVector(725, 124), createVector(747, 124)];
	pointer_polygons_plotprofile = new Polygon(polygon56, "stroke");
	array_polygons_plotprofile[56] = pointer_polygons_plotprofile;

	var polygon57 = [createVector(772, 125), createVector(773, 62), createVector(747, 62), createVector(747, 124), createVector(772, 125)];
	pointer_polygons_plotprofile = new Polygon(polygon57, "stroke");
	array_polygons_plotprofile[57] = pointer_polygons_plotprofile;

	var polygon58 = [createVector(772, 12), createVector(773, 62), createVector(747, 62), createVector(747, 13), createVector(772, 12)];
	pointer_polygons_plotprofile = new Polygon(polygon58, "stroke");
	array_polygons_plotprofile[58] = pointer_polygons_plotprofile;

	var polygon59 = [createVector(675, 15), createVector(747, 13), createVector(747, 62), createVector(675, 62), createVector(675, 15)];
	pointer_polygons_plotprofile = new Polygon(polygon59, "stroke");
	array_polygons_plotprofile[59] = pointer_polygons_plotprofile;

	var polygon60 = [createVector(465, 599), createVector(465, 764), createVector(435, 764), createVector(435, 601), createVector(465, 599)];
	pointer_polygons_plotprofile = new Polygon(polygon60, "stroke");
	array_polygons_plotprofile[60] = pointer_polygons_plotprofile;

	var polygon61 = [createVector(394, 602), createVector(435, 601), createVector(435, 764), createVector(394, 762), createVector(394, 602)];
	pointer_polygons_plotprofile = new Polygon(polygon61, "stroke");
	array_polygons_plotprofile[61] = pointer_polygons_plotprofile;

	var polygon62 = [createVector(366, 604), createVector(394, 602), createVector(394, 762), createVector(366, 761), createVector(366, 604)];
	pointer_polygons_plotprofile = new Polygon(polygon62, "stroke");
	array_polygons_plotprofile[62] = pointer_polygons_plotprofile;

	var polygon63 = [createVector(344, 605), createVector(366, 604), createVector(366, 761), createVector(344, 760), createVector(344, 605)];
	pointer_polygons_plotprofile = new Polygon(polygon63, "stroke");
	array_polygons_plotprofile[63] = pointer_polygons_plotprofile;

	var polygon64 = [createVector(317, 605), createVector(344, 605), createVector(344, 760), createVector(317, 759), createVector(317, 605)];
	pointer_polygons_plotprofile = new Polygon(polygon64, "stroke");
	array_polygons_plotprofile[64] = pointer_polygons_plotprofile;

	var polygon65 = [createVector(290, 607), createVector(317, 605), createVector(317, 759), createVector(290, 758), createVector(290, 607)];
	pointer_polygons_plotprofile = new Polygon(polygon65, "stroke");
	array_polygons_plotprofile[65] = pointer_polygons_plotprofile;

	var polygon66 = [createVector(271, 608), createVector(290, 607), createVector(290, 758), createVector(271, 757), createVector(271, 608)];
	pointer_polygons_plotprofile = new Polygon(polygon66, "stroke");
	array_polygons_plotprofile[66] = pointer_polygons_plotprofile;

	var polygon67 = [createVector(229, 610), createVector(271, 608), createVector(271, 721), createVector(229, 721), createVector(229, 610)];
	pointer_polygons_plotprofile = new Polygon(polygon67, "stroke");
	array_polygons_plotprofile[67] = pointer_polygons_plotprofile;

	var polygon68 = [createVector(195, 612), createVector(229, 610), createVector(229, 756), createVector(195, 755), createVector(195, 612)];
	pointer_polygons_plotprofile = new Polygon(polygon68, "stroke");
	array_polygons_plotprofile[68] = pointer_polygons_plotprofile;

	var polygon69 = [createVector(162, 613), createVector(195, 612), createVector(195, 755), createVector(162, 753), createVector(162, 613)];
	pointer_polygons_plotprofile = new Polygon(polygon69, "stroke");
	array_polygons_plotprofile[69] = pointer_polygons_plotprofile;

	var polygon70 = [createVector(134, 615), createVector(162, 613), createVector(162, 753), createVector(134, 752), createVector(134, 615)];
	pointer_polygons_plotprofile = new Polygon(polygon70, "stroke");
	array_polygons_plotprofile[70] = pointer_polygons_plotprofile;

	var polygon71 = [createVector(89, 616), createVector(134, 615), createVector(134, 752), createVector(89, 751), createVector(89, 616)];
	pointer_polygons_plotprofile = new Polygon(polygon71, "stroke");
	array_polygons_plotprofile[71] = pointer_polygons_plotprofile;

	var polygon72 = [createVector(13, 620), createVector(89, 616), createVector(89, 751), createVector(13, 748), createVector(13, 620)];
	pointer_polygons_plotprofile = new Polygon(polygon72, "stroke");
	array_polygons_plotprofile[72] = pointer_polygons_plotprofile;

	var polygon73 = [createVector(229, 755), createVector(271, 757), createVector(271, 721), createVector(229, 721), createVector(229, 755)];
	pointer_polygons_plotprofile = new Polygon(polygon73, "stroke");
	array_polygons_plotprofile[73] = pointer_polygons_plotprofile;

	var polygon74 = [createVector(465, 310), createVector(465, 364), createVector(399, 364), createVector(399, 314), createVector(465, 310)];
	pointer_polygons_plotprofile = new Polygon(polygon74, "stroke");
	array_polygons_plotprofile[74] = pointer_polygons_plotprofile;

	var polygon75 = [createVector(465, 415), createVector(399, 417), createVector(399, 364), createVector(465, 364), createVector(465, 415)];
	pointer_polygons_plotprofile = new Polygon(polygon75, "stroke");
	array_polygons_plotprofile[75] = pointer_polygons_plotprofile;

	var polygon76 = [createVector(369, 420), createVector(399, 417), createVector(399, 364), createVector(369, 364), createVector(369, 420)];
	pointer_polygons_plotprofile = new Polygon(polygon76, "stroke");
	array_polygons_plotprofile[76] = pointer_polygons_plotprofile;

	var polygon77 = [createVector(369, 316), createVector(399, 314), createVector(399, 364), createVector(369, 364), createVector(369, 316)];
	pointer_polygons_plotprofile = new Polygon(polygon77, "stroke");
	array_polygons_plotprofile[77] = pointer_polygons_plotprofile;

	var polygon78 = [createVector(338, 318), createVector(369, 316), createVector(369, 381), createVector(338, 381), createVector(338, 318)];
	pointer_polygons_plotprofile = new Polygon(polygon78, "stroke");
	array_polygons_plotprofile[78] = pointer_polygons_plotprofile;

	var polygon79 = [createVector(338, 422), createVector(369, 420), createVector(369, 381), createVector(338, 381), createVector(338, 422)];
	pointer_polygons_plotprofile = new Polygon(polygon79, "stroke");
	array_polygons_plotprofile[79] = pointer_polygons_plotprofile;

	var polygon80 = [createVector(295, 424), createVector(338, 422), createVector(338, 318), createVector(295, 321), createVector(295, 424)];
	pointer_polygons_plotprofile = new Polygon(polygon80, "stroke");
	array_polygons_plotprofile[80] = pointer_polygons_plotprofile;

	var polygon81 = [createVector(268, 425), createVector(295, 423), createVector(295, 375), createVector(268, 375), createVector(268, 425)];
	pointer_polygons_plotprofile = new Polygon(polygon81, "stroke");
	array_polygons_plotprofile[81] = pointer_polygons_plotprofile;

	var polygon82 = [createVector(281, 321), createVector(281, 375), createVector(295, 375), createVector(295, 321), createVector(281, 321)];
	pointer_polygons_plotprofile = new Polygon(polygon82, "stroke");
	array_polygons_plotprofile[82] = pointer_polygons_plotprofile;

	var polygon83 = [createVector(268, 322), createVector(268, 375), createVector(281, 375), createVector(281, 321), createVector(268, 322)];
	pointer_polygons_plotprofile = new Polygon(polygon83, "stroke");
	array_polygons_plotprofile[83] = pointer_polygons_plotprofile;

	var polygon84 = [createVector(252, 426), createVector(252, 323), createVector(268, 322), createVector(268, 425), createVector(252, 426)];
	pointer_polygons_plotprofile = new Polygon(polygon84, "stroke");
	array_polygons_plotprofile[84] = pointer_polygons_plotprofile;

	var polygon85 = [createVector(230, 428), createVector(230, 375), createVector(252, 375), createVector(252, 426), createVector(230, 428)];
	pointer_polygons_plotprofile = new Polygon(polygon85, "stroke");
	array_polygons_plotprofile[85] = pointer_polygons_plotprofile;

	var polygon86 = [createVector(230, 324), createVector(252, 323), createVector(252, 375), createVector(230, 375), createVector(230, 324)];
	pointer_polygons_plotprofile = new Polygon(polygon86, "stroke");
	array_polygons_plotprofile[86] = pointer_polygons_plotprofile;

	var polygon87 = [createVector(207, 429), createVector(230, 428), createVector(230, 375), createVector(218, 375), createVector(207, 375), createVector(207, 429)];
	pointer_polygons_plotprofile = new Polygon(polygon87, "stroke");
	array_polygons_plotprofile[87] = pointer_polygons_plotprofile;

	var polygon88 = [createVector(218, 325), createVector(218, 375), createVector(230, 375), createVector(230, 324), createVector(218, 325)];
	pointer_polygons_plotprofile = new Polygon(polygon88, "stroke");
	array_polygons_plotprofile[88] = pointer_polygons_plotprofile;

	var polygon89 = [createVector(207, 326), createVector(207, 375), createVector(218, 375), createVector(218, 325), createVector(207, 326)];
	pointer_polygons_plotprofile = new Polygon(polygon89, "stroke");
	array_polygons_plotprofile[89] = pointer_polygons_plotprofile;

	var polygon90 = [createVector(173, 430), createVector(193, 429), createVector(193, 375), createVector(173, 375), createVector(173, 430)];
	pointer_polygons_plotprofile = new Polygon(polygon90, "stroke");
	array_polygons_plotprofile[90] = pointer_polygons_plotprofile;

	var polygon91 = [createVector(193, 327), createVector(193, 375), createVector(207, 375), createVector(207, 326), createVector(193, 327)];
	pointer_polygons_plotprofile = new Polygon(polygon91, "stroke");
	array_polygons_plotprofile[91] = pointer_polygons_plotprofile;

	var polygon92 = [createVector(173, 328), createVector(173, 375), createVector(193, 375), createVector(193, 327), createVector(173, 328)];
	pointer_polygons_plotprofile = new Polygon(polygon92, "stroke");
	array_polygons_plotprofile[92] = pointer_polygons_plotprofile;

	var polygon93 = [createVector(155, 328), createVector(155, 375), createVector(173, 375), createVector(173, 328), createVector(155, 328)];
	pointer_polygons_plotprofile = new Polygon(polygon93, "stroke");
	array_polygons_plotprofile[93] = pointer_polygons_plotprofile;

	var polygon94 = [createVector(127, 432), createVector(155, 430), createVector(155, 375), createVector(127, 375), createVector(127, 432)];
	pointer_polygons_plotprofile = new Polygon(polygon94, "stroke");
	array_polygons_plotprofile[94] = pointer_polygons_plotprofile;

	var polygon95 = [createVector(127, 331), createVector(127, 375), createVector(155, 375), createVector(155, 328), createVector(127, 331)];
	pointer_polygons_plotprofile = new Polygon(polygon95, "stroke");
	array_polygons_plotprofile[95] = pointer_polygons_plotprofile;

	var polygon96 = [createVector(100, 332), createVector(100, 374), createVector(127, 375), createVector(127, 331), createVector(100, 332)];
	pointer_polygons_plotprofile = new Polygon(polygon96, "stroke");
	array_polygons_plotprofile[96] = pointer_polygons_plotprofile;

	var polygon97 = [createVector(100, 434), createVector(127, 432), createVector(127, 375), createVector(100, 374), createVector(100, 434)];
	pointer_polygons_plotprofile = new Polygon(polygon97, "stroke");
	array_polygons_plotprofile[97] = pointer_polygons_plotprofile;

	var polygon98 = [createVector(64, 334), createVector(64, 436), createVector(46, 437), createVector(13, 435), createVector(13, 366), createVector(64, 334)];
	pointer_polygons_plotprofile = new Polygon(polygon98, "stroke");
	array_polygons_plotprofile[98] = pointer_polygons_plotprofile;

	var polygon99 = [createVector(64, 334), createVector(100, 332), createVector(100, 381), createVector(64, 382), createVector(64, 334)];
	pointer_polygons_plotprofile = new Polygon(polygon99, "stroke");
	array_polygons_plotprofile[99] = pointer_polygons_plotprofile;

	var polygon100 = [createVector(64, 435), createVector(100, 433), createVector(100, 382), createVector(64, 382), createVector(64, 435)];
	pointer_polygons_plotprofile = new Polygon(polygon100, "stroke");
	array_polygons_plotprofile[100] = pointer_polygons_plotprofile;

	var polygon101 = [createVector(476, 101), createVector(469, 268), createVector(405, 270), createVector(405, 138), createVector(476, 101)];
	pointer_polygons_plotprofile = new Polygon(polygon101, "stroke");
	array_polygons_plotprofile[101] = pointer_polygons_plotprofile;

	var polygon102 = [createVector(380, 270), createVector(405, 270), createVector(405, 138), createVector(380, 152), createVector(380, 270)];
	pointer_polygons_plotprofile = new Polygon(polygon102, "stroke");
	array_polygons_plotprofile[102] = pointer_polygons_plotprofile;

	var polygon103 = [createVector(341, 271), createVector(380, 270), createVector(380, 152), createVector(338, 174), createVector(341, 271)];
	pointer_polygons_plotprofile = new Polygon(polygon103, "stroke");
	array_polygons_plotprofile[103] = pointer_polygons_plotprofile;

	var polygon104 = [createVector(304, 274), createVector(341, 271), createVector(338, 174), createVector(299, 195), createVector(304, 274)];
	pointer_polygons_plotprofile = new Polygon(polygon104, "stroke");
	array_polygons_plotprofile[104] = pointer_polygons_plotprofile;

	var polygon105 = [createVector(263, 276), createVector(304, 274), createVector(299, 195), createVector(260, 215), createVector(263, 276)];
	pointer_polygons_plotprofile = new Polygon(polygon105, "stroke");
	array_polygons_plotprofile[105] = pointer_polygons_plotprofile;

	var polygon106 = [createVector(218, 278), createVector(263, 276), createVector(260, 215), createVector(218, 237), createVector(218, 278)];
	pointer_polygons_plotprofile = new Polygon(polygon106, "stroke");
	array_polygons_plotprofile[106] = pointer_polygons_plotprofile;

	var polygon107 = [createVector(132, 282), createVector(218, 278), createVector(218, 237), createVector(132, 282)];
	pointer_polygons_plotprofile = new Polygon(polygon107, "stroke");
	array_polygons_plotprofile[107] = pointer_polygons_plotprofile;

	var polygon108 = [createVector(465, 459), createVector(445, 460), createVector(445, 518), createVector(465, 518), createVector(465, 459)];
	pointer_polygons_plotprofile = new Polygon(polygon108, "stroke");
	array_polygons_plotprofile[108] = pointer_polygons_plotprofile;

	var polygon109 = [createVector(418, 562), createVector(445, 560), createVector(445, 518), createVector(418, 518), createVector(418, 562)];
	pointer_polygons_plotprofile = new Polygon(polygon109, "stroke");
	array_polygons_plotprofile[109] = pointer_polygons_plotprofile;

	var polygon110 = [createVector(415, 462), createVector(445, 460), createVector(445, 518), createVector(418, 518), createVector(415, 462)];
	pointer_polygons_plotprofile = new Polygon(polygon110, "stroke");
	array_polygons_plotprofile[110] = pointer_polygons_plotprofile;

	var polygon111 = [createVector(394, 463), createVector(415, 462), createVector(418, 518), createVector(394, 518), createVector(394, 463)];
	pointer_polygons_plotprofile = new Polygon(polygon111, "stroke");
	array_polygons_plotprofile[111] = pointer_polygons_plotprofile;

	var polygon112 = [createVector(366, 564), createVector(394, 562), createVector(394, 513), createVector(366, 513), createVector(366, 564)];
	pointer_polygons_plotprofile = new Polygon(polygon112, "stroke");
	array_polygons_plotprofile[112] = pointer_polygons_plotprofile;

	var polygon113 = [createVector(366, 464), createVector(394, 463), createVector(394, 513), createVector(366, 513), createVector(366, 464)];
	pointer_polygons_plotprofile = new Polygon(polygon113, "stroke");
	array_polygons_plotprofile[113] = pointer_polygons_plotprofile;

	var polygon114 = [createVector(338, 466), createVector(366, 464), createVector(366, 513), createVector(338, 513), createVector(338, 466)];
	pointer_polygons_plotprofile = new Polygon(polygon114, "stroke");
	array_polygons_plotprofile[114] = pointer_polygons_plotprofile;

	var polygon115 = [createVector(317, 566), createVector(338, 564), createVector(338, 513), createVector(316, 513), createVector(317, 566)];
	pointer_polygons_plotprofile = new Polygon(polygon115, "stroke");
	array_polygons_plotprofile[115] = pointer_polygons_plotprofile;

	var polygon116 = [createVector(317, 467), createVector(316, 513), createVector(338, 513), createVector(338, 466), createVector(317, 467)];
	pointer_polygons_plotprofile = new Polygon(polygon116, "stroke");
	array_polygons_plotprofile[116] = pointer_polygons_plotprofile;

	var polygon117 = [createVector(298, 467), createVector(298, 513), createVector(316, 513), createVector(317, 467), createVector(298, 467)];
	pointer_polygons_plotprofile = new Polygon(polygon117, "stroke");
	array_polygons_plotprofile[117] = pointer_polygons_plotprofile;

	var polygon118 = [createVector(298, 566), createVector(317, 566), createVector(316, 513), createVector(298, 513), createVector(298, 566)];
	pointer_polygons_plotprofile = new Polygon(polygon118, "stroke");
	array_polygons_plotprofile[118] = pointer_polygons_plotprofile;

	var polygon119 = [createVector(274, 567), createVector(298, 566), createVector(298, 513), createVector(274, 513), createVector(274, 567)];
	pointer_polygons_plotprofile = new Polygon(polygon119, "stroke");
	array_polygons_plotprofile[119] = pointer_polygons_plotprofile;

	var polygon120 = [createVector(274, 469), createVector(274, 513), createVector(298, 513), createVector(298, 467), createVector(274, 469)];
	pointer_polygons_plotprofile = new Polygon(polygon120, "stroke");
	array_polygons_plotprofile[120] = pointer_polygons_plotprofile;

	var polygon121 = [createVector(252, 471), createVector(252, 513), createVector(274, 513), createVector(274, 469), createVector(252, 471)];
	pointer_polygons_plotprofile = new Polygon(polygon121, "stroke");
	array_polygons_plotprofile[121] = pointer_polygons_plotprofile;

	var polygon122 = [createVector(252, 568), createVector(274, 567), createVector(274, 513), createVector(252, 513), createVector(252, 568)];
	pointer_polygons_plotprofile = new Polygon(polygon122, "stroke");
	array_polygons_plotprofile[122] = pointer_polygons_plotprofile;

	var polygon123 = [createVector(230, 568), createVector(230, 472), createVector(252, 471), createVector(252, 568), createVector(230, 568)];
	pointer_polygons_plotprofile = new Polygon(polygon123, "stroke");
	array_polygons_plotprofile[123] = pointer_polygons_plotprofile;

	var polygon124 = [createVector(213, 569), createVector(213, 473), createVector(230, 472), createVector(230, 568), createVector(213, 569)];
	pointer_polygons_plotprofile = new Polygon(polygon124, "stroke");
	array_polygons_plotprofile[124] = pointer_polygons_plotprofile;

	var polygon125 = [createVector(193, 570), createVector(192, 474), createVector(213, 473), createVector(213, 569), createVector(193, 570)];
	pointer_polygons_plotprofile = new Polygon(polygon125, "stroke");
	array_polygons_plotprofile[125] = pointer_polygons_plotprofile;

	var polygon126 = [createVector(169, 571), createVector(169, 475), createVector(192, 474), createVector(193, 570), createVector(169, 571)];
	pointer_polygons_plotprofile = new Polygon(polygon126, "stroke");
	array_polygons_plotprofile[126] = pointer_polygons_plotprofile;

	var polygon127 = [createVector(141, 572), createVector(141, 519), createVector(169, 518), createVector(169, 571), createVector(141, 572)];
	pointer_polygons_plotprofile = new Polygon(polygon127, "stroke");
	array_polygons_plotprofile[127] = pointer_polygons_plotprofile;

	var polygon128 = [createVector(141, 477), createVector(141, 519), createVector(169, 518), createVector(169, 475), createVector(141, 477)];
	pointer_polygons_plotprofile = new Polygon(polygon128, "stroke");
	array_polygons_plotprofile[128] = pointer_polygons_plotprofile;

	var polygon129 = [createVector(111, 478), createVector(113, 573), createVector(141, 572), createVector(141, 477), createVector(111, 478)];
	pointer_polygons_plotprofile = new Polygon(polygon129, "stroke");
	array_polygons_plotprofile[129] = pointer_polygons_plotprofile;

	var polygon130 = [createVector(89, 479), createVector(89, 574), createVector(113, 573), createVector(111, 478), createVector(89, 479)];
	pointer_polygons_plotprofile = new Polygon(polygon130, "stroke");
	array_polygons_plotprofile[130] = pointer_polygons_plotprofile;

	var polygon131 = [createVector(73, 574), createVector(73, 526), createVector(89, 525), createVector(89, 574), createVector(73, 574)];
	pointer_polygons_plotprofile = new Polygon(polygon131, "stroke");
	array_polygons_plotprofile[131] = pointer_polygons_plotprofile;

	var polygon132 = [createVector(56, 575), createVector(56, 526), createVector(73, 526), createVector(73, 574), createVector(56, 575)];
	pointer_polygons_plotprofile = new Polygon(polygon132, "stroke");
	array_polygons_plotprofile[132] = pointer_polygons_plotprofile;

	var polygon133 = [createVector(35, 576), createVector(35, 526), createVector(56, 526), createVector(56, 575), createVector(35, 576)];
	pointer_polygons_plotprofile = new Polygon(polygon133, "stroke");
	array_polygons_plotprofile[133] = pointer_polygons_plotprofile;

	var polygon134 = [createVector(13, 576), createVector(13, 526), createVector(35, 526), createVector(35, 576), createVector(13, 576)];
	pointer_polygons_plotprofile = new Polygon(polygon134, "stroke");
	array_polygons_plotprofile[134] = pointer_polygons_plotprofile;

	var polygon135 = [createVector(43, 482), createVector(43, 526), createVector(89, 525), createVector(89, 479), createVector(43, 482)];
	pointer_polygons_plotprofile = new Polygon(polygon135, "stroke");
	array_polygons_plotprofile[135] = pointer_polygons_plotprofile;

	var polygon136 = [createVector(13, 483), createVector(13, 526), createVector(43, 526), createVector(43, 482), createVector(13, 483)];
	pointer_polygons_plotprofile = new Polygon(polygon136, "stroke");
	array_polygons_plotprofile[136] = pointer_polygons_plotprofile;

}

function plotprofile()
{
	clear();
	var i = 0;

	//rect
	for(i=0; i<9; i++)
	{
		if(collidePointRect(mouseX, mouseY, array_rects_plotprofile[i].array_of_vectors[0].x, array_rects_plotprofile[i].array_of_vectors[0].y, array_rects_plotprofile[i].array_of_vectors[1].x, array_rects_plotprofile[i].array_of_vectors[1].y) == true)
		{
			array_rects_plotprofile[i].color(0, 0, 0, 255);
			tip = new Tooltip("rect" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_rects_plotprofile[i].color(0, 0, 0, 255);
		}
	}

	//polygon
	for(i=0; i<137; i++)
	{
		if(collidePointPoly(mouseX, mouseY, array_polygons_plotprofile[i].array_of_vectors) == true)
		{
			array_polygons_plotprofile[i].color(0, 0, 0, 255);
			tip = new Tooltip("polygon" + i, mouseX, mouseY, 100, 40);
			tip.show();
		}
		else
		{
			array_polygons_plotprofile[i].color(0, 0, 0, 255);
		}
	}
}

