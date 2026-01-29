import { BrainCircuit, Database, FileText } from 'lucide-react';
import { ServiceItem } from './types';

export const APP_CONFIG = {
  title: "Nexus AI Research",
  subtitle: "AI 기반 통합 연구 지원 플랫폼",
  heroTitle: "연구의 한계를 넘어서다",
  heroDescription: "복잡한 데이터 분석부터 논문 작성까지.\nNexus AI는 당신의 연구 여정을 혁신하는 지능형 파트너입니다.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'literature',
    title: 'AI 문헌 분석',
    description: '수백만 건의 논문을 AI가 실시간으로 분석하여 핵심 인사이트와 연구 동향을 제공합니다.',
    icon: BrainCircuit,
    link: '#service-literature',
    buttonText: '문헌 탐색 시작',
  },
  {
    id: 'analytics',
    title: '지능형 데이터 해석',
    description: '복잡한 실험 데이터를 업로드하세요. 패턴 인식 알고리즘이 숨겨진 상관관계를 찾아냅니다.',
    icon: Database,
    link: '#service-analytics',
    buttonText: '데이터 분석하기',
  },
  {
    id: 'writing',
    title: '학술 논문 어시스턴트',
    description: '초안 작성부터 인용구 정리, 문법 교정까지. 완벽한 논문을 위한 에디팅 툴을 경험하세요.',
    icon: FileText,
    link: '#service-writing',
    buttonText: '작성 도구 열기',
  },
];