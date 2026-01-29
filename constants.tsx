import { Activity, FileText, MessageCircle } from "lucide-react";
import { ServiceItem } from "./types";

export const APP_CONFIG = {
  title: "Nexus AI Research",
  subtitle: "AI 기반 통합 연구 지원 플랫폼",
  heroTitle: "연구의 한계를 넘어서다",
  heroDescription:
    "복잡한 데이터 분석부터 논문 작성까지.\nAI를 통해 당신의 연구 여정을 혁신으로 이끄세요",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "writing",
    title: "AI 학습 챗봇 어시스턴트",
    description: "AI 챗봇 에이전트를 통해 빠르게 인사이트를 얻어가세요.",
    icon: MessageCircle,
    link: "https://biorag-front-963648970521.asia-northeast3.run.app/reasoning",
    buttonText: "작성 도구 열기",
  },
  {
    id: "analytics",
    title: "지능형 데이터 해석",
    description:
      "복잡한 실험 데이터를 업로드하세요. 패턴 인식 알고리즘이 숨겨진 상관관계를 찾아냅니다.",
    icon: Activity,
    link: "#service-analytics",
    buttonText: "데이터 분석하기",
  },
  {
    id: "literature",
    title: "생물학적 인사이트",
    description:
      "복잡한 RNA-시퀀싱 데이터, 더 이상 헤매지 마세요. 한 눈에 보이는 시각화부터 핵심 인사이트 추출까지, 단번에 해결됩니다.",
    icon: FileText,
    link: "http://34.50.17.30/",
    buttonText: "문헌 탐색 시작",
  },
];
