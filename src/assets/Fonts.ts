import Colors from './Colors';

const getFontSize = (size: number) => {
  return size;
};

type AppColorType = keyof typeof Colors;

type C = AppColorType | (string & {});

const black = Colors.DARK_TEXT_BLACK;

const Fonts = {
  interBlack: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-Black',
  }),
  interBold: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-Bold',
  }),
  interExtraBold: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-ExtraBold',
  }),
  interExtraLight: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-ExtraLight',
  }),
  interLight: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-Light',
  }),
  interMedium: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-Medium',
  }),
  interRegular: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-Regular',
  }),
  interSemiBold: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-SemiBold',
  }),
  interThin: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'Inter-Thin',
  }),
  ldBlack: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-Black',
  }),
  ldBold: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-Bold',
  }),
  ldExtraBold: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-ExtraBold',
  }),
  ldExtraLight: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-ExtraLight',
  }),
  ldLight: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-Light',
  }),
  ldMedium: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-Medium',
  }),
  ldRegular: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-Regular',
  }),
  ldSemiBold: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-SemiBold',
  }),
  ldThin: (s = 18, c: C = black) => ({
    fontSize: getFontSize(s),
    color: (Colors[c as AppColorType] as string) || c,
    fontFamily: 'LexendDeca-Thin',
  }),
};

export default Fonts;
