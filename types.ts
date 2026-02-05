
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  stack: string[];
  card: {
    one_liner: string;
    tags: string[];
  };
  case: {
    problem: string;
    approach: string[];
    outcome: string[];
    limitations: string[];
    next_steps: string[];
  };
  artifact: {
    type: 'iframe' | 'external_link';
    url: string;
    open_new_tab_label?: string;
    recommended_height_px?: number;
    button_label?: string;
  };
  how_to_use: string[];
}

export interface HeadlineVariant {
  headline: string;
  subheadline: string;
}

export interface Person {
  name: string;
  location: string;
  email: string;
  linkedin: string;
  headline_variants: Record<string, HeadlineVariant>;
  default_variant: string;
  quick_value_props: { title: string; description: string }[];
  about_short: { title: string; text: string };
}
