import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projects.data';
import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient';

export interface ProjectFilterOptions {
  category?: ProjectCategory;
  technologyId?: string;
  searchQuery?: string;
}

export class ProjectService {
  /**
   * Fetches projects with optional filtering.
   * Leverages Supabase when available, falling back cleanly to local data.
   */
  public static async getProjects(options: ProjectFilterOptions = {}): Promise<Project[]> {
    let list: Project[] = [];

    if (isSupabaseConfigured()) {
      const client = getSupabaseClient();
      if (client) {
        try {
          let query = client.from('projects').select(`
            id,
            slug,
            title,
            description,
            long_description,
            category,
            thumbnail,
            github_url,
            demo_url,
            featured,
            display_order
          `).order('display_order', { ascending: true });

          const { data, error } = await query;

          if (!error && data && data.length > 0) {
            // Map Supabase rows and merge with local case studies & architectures
            list = data.map(row => {
              const localMatch = projectsData.find(p => p.slug === row.slug || p.id === row.id);
              return {
                id: row.id,
                slug: row.slug,
                title: row.title,
                description: row.description,
                longDescription: row.long_description || localMatch?.longDescription,
                category: row.category as Project['category'],
                technologies: localMatch ? localMatch.technologies : [],
                thumbnail: row.thumbnail || localMatch?.thumbnail,
                githubUrl: row.github_url || localMatch?.githubUrl,
                demoUrl: row.demo_url || localMatch?.demoUrl,
                featured: Boolean(row.featured),
                architecture: localMatch?.architecture,
                caseStudy: localMatch?.caseStudy
              };
            });
          } else {
            list = [...projectsData];
          }
        } catch {
          list = [...projectsData];
        }
      } else {
        list = [...projectsData];
      }
    } else {
      list = [...projectsData];
    }

    // Apply Client-Side Filters
    return this.applyFilters(list, options);
  }

  /**
   * Filters a list of projects based on category, technology, and search terms.
   */
  public static applyFilters(projects: Project[], options: ProjectFilterOptions): Project[] {
    return projects.filter(project => {
      // Category filter
      if (options.category && options.category !== 'All') {
        if (project.category.toLowerCase() !== options.category.toLowerCase()) {
          return false;
        }
      }

      // Technology filter
      if (options.technologyId) {
        const matchesTech = project.technologies.some(
          t => t.id.toLowerCase() === options.technologyId?.toLowerCase() ||
               t.name.toLowerCase().includes(options.technologyId?.toLowerCase() || '')
        );
        if (!matchesTech) {
          return false;
        }
      }

      // Search Query filter
      if (options.searchQuery && options.searchQuery.trim().length > 0) {
        const q = options.searchQuery.toLowerCase().trim();
        const inTitle = project.title.toLowerCase().includes(q);
        const inDesc = project.description.toLowerCase().includes(q);
        const inTech = project.technologies.some(t => t.name.toLowerCase().includes(q));
        const inCategory = project.category.toLowerCase().includes(q);

        if (!inTitle && !inDesc && !inTech && !inCategory) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Retrieves single project by slug or ID
   */
  public static getProjectBySlug(slug: string): Project | undefined {
    return projectsData.find(p => p.slug === slug || p.id === slug);
  }
}
