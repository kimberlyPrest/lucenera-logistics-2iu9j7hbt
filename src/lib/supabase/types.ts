// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.4'
  }
  public: {
    Tables: {
      entregas_finalizadas: {
        Row: {
          cliente: string
          codigo_obra: string
          created_at: string
          data_entrega_real: string
          data_solicitacao: string | null
          endereco: string
          fotos_urls: string[]
          gestora_equipe: string | null
          id: string
          material_conteudo: string
          material_tipo: string
          numero_entrega: string | null
          numero_pedido: string | null
          observacoes: string | null
          observacoes_internas: string | null
          recebido_por: string
          separacao_id: string
          telefone: string
          vendedor: string | null
        }
        Insert: {
          cliente: string
          codigo_obra: string
          created_at?: string
          data_entrega_real?: string
          data_solicitacao?: string | null
          endereco: string
          fotos_urls?: string[]
          gestora_equipe?: string | null
          id?: string
          material_conteudo: string
          material_tipo: string
          numero_entrega?: string | null
          numero_pedido?: string | null
          observacoes?: string | null
          observacoes_internas?: string | null
          recebido_por: string
          separacao_id: string
          telefone: string
          vendedor?: string | null
        }
        Update: {
          cliente?: string
          codigo_obra?: string
          created_at?: string
          data_entrega_real?: string
          data_solicitacao?: string | null
          endereco?: string
          fotos_urls?: string[]
          gestora_equipe?: string | null
          id?: string
          material_conteudo?: string
          material_tipo?: string
          numero_entrega?: string | null
          numero_pedido?: string | null
          observacoes?: string | null
          observacoes_internas?: string | null
          recebido_por?: string
          separacao_id?: string
          telefone?: string
          vendedor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'dispatch_logs_dispatch_id_fkey'
            columns: ['dispatch_id']
            isOneToOne: false
            referencedRelation: 'dispatches'
            referencedColumns: ['id']
          },
        ]
      }
      entregas_pendentes: {
        Row: {
          cliente: string
          codigo_obra: string
          created_at: string | null
          data_registro: string | null
          descricao_problema: string
          endereco: string | null
          fotos_resolucao: string[] | null
          fotos_urls: string[] | null
          id: string
          instance_distribution: Json | null
          is_multi_instance: boolean | null
          last_sent_index: number | null
          lot_config: Json | null
          sent_count: number | null
          source_filename: string | null
          source_type: string
          source_url: string | null
          started_at: string | null
          status: string
          template: string
          total_contacts: number | null
          user_id: string
        }
        Insert: {
          approved_variations?: Json | null
          contacts_json?: Json | null
          created_at?: string | null
          error_count?: number | null
          finished_at?: string | null
          id?: string
          instance_distribution?: Json | null
          is_multi_instance?: boolean | null
          last_sent_index?: number | null
          lot_config?: Json | null
          sent_count?: number | null
          source_filename?: string | null
          source_type: string
          source_url?: string | null
          started_at?: string | null
          status?: string
          template: string
          total_contacts?: number | null
          user_id: string
        }
        Update: {
          approved_variations?: Json | null
          contacts_json?: Json | null
          created_at?: string | null
          error_count?: number | null
          finished_at?: string | null
          id?: string
          instance_distribution?: Json | null
          is_multi_instance?: boolean | null
          last_sent_index?: number | null
          lot_config?: Json | null
          sent_count?: number | null
          source_filename?: string | null
          source_type?: string
          source_url?: string | null
          started_at?: string | null
          status?: string
          template?: string
          total_contacts?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'dispatches_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'auth_users_view'
            referencedColumns: ['id']
          },
        ]
      }
      hubspot_contacts: {
        Row: {
          created_at: string | null
          csat_reuniao_1: string | null
          csat_reuniao_2: string | null
          csat_reuniao_3: string | null
          data_etapa_atual: string | null
          data_reuniao_1: string | null
          data_reuniao_2: string | null
          data_reuniao_3: string | null
          email: string | null
          etapa_negocio: string | null
          hubspot_id: string | null
          id: string
          nome: string | null
          numero_consultoria: string | null
          primeiro_nome: string | null
          produto: string | null
          raw_payload: Json | null
          telefone: string | null
          tipo_problema: string
        }
        Insert: {
          cliente: string
          codigo_obra: string
          created_at?: string | null
          data_registro?: string | null
          descricao_problema: string
          endereco?: string | null
          fotos_resolucao?: string[] | null
          fotos_urls?: string[] | null
          id?: string
          observacoes_resolucao?: string | null
          registrado_por: string
          registrado_por_user_id?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          resolved_by_user_id?: string | null
          responsavel?: string | null
          separacao_id: string
          status_pendencia?: string | null
          telefone?: string | null
          tipo_problema: string
        }
        Update: {
          cliente?: string
          codigo_obra?: string
          created_at?: string | null
          data_registro?: string | null
          descricao_problema?: string
          endereco?: string | null
          fotos_resolucao?: string[] | null
          fotos_urls?: string[] | null
          id?: string
          observacoes_resolucao?: string | null
          registrado_por?: string
          registrado_por_user_id?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          resolved_by_user_id?: string | null
          responsavel?: string | null
          separacao_id?: string
          status_pendencia?: string | null
          telefone?: string | null
          tipo_problema?: string
        }
        Relationships: [
          {
            foreignKeyName: 'hubspot_contacts_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'auth_users_view'
            referencedColumns: ['id']
          },
        ]
      }
      separacao_arquivos: {
        Row: {
          created_at: string
          id: string
          nome_arquivo: string
          ordem: number
          separacao_id: string
          tamanho_bytes: number
          tipo_arquivo: string
          url_arquivo: string
        }
        Insert: {
          created_at?: string
          id?: string
          nome_arquivo: string
          ordem?: number
          separacao_id: string
          tamanho_bytes: number
          tipo_arquivo: string
          url_arquivo: string
        }
        Update: {
          created_at?: string
          id?: string
          nome_arquivo?: string
          ordem?: number
          separacao_id?: string
          tamanho_bytes?: number
          tipo_arquivo?: string
          url_arquivo?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_credentials_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'auth_users_view'
            referencedColumns: ['id']
          },
        ]
      }
      separacao_itens: {
        Row: {
          codigo_produto: string
          created_at: string
          descricao: string
          id: string
          id_lote: string | null
          local: string | null
          marca: string | null
          ordem: number
          quantidade: number
          referencia: string
          separacao_id: string
        }
        Insert: {
          codigo_produto: string
          created_at?: string
          descricao: string
          id?: string
          id_lote?: string | null
          local?: string | null
          marca?: string | null
          ordem?: number
          quantidade: number
          referencia: string
          separacao_id: string
        }
        Update: {
          codigo_produto?: string
          created_at?: string
          descricao?: string
          id?: string
          id_lote?: string | null
          local?: string | null
          marca?: string | null
          ordem?: number
          quantidade?: number
          referencia?: string
          separacao_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "separacao_itens_separacao_id_fkey"
            columns: ["separacao_id"]
            isOneToOne: false
            referencedRelation: "separacoes"
            referencedColumns: ["id"]
          },
        ]
      }
      separacoes: {
        Row: {
          cliente: string
          codigo_obra: string
          codigo_rastreamento: string | null
          created_at: string
          data_entrega: string
          data_inicio_separacao: string | null
          delivery_type: string
          endereco: string
          garantia_detalhes: string | null
          garantia_motivo: string | null
          garantia_peca: string | null
          gestora_equipe: string
          id: string
          inclui_garantia: boolean
          material_conteudo: string
          material_tipo: string | null
          nivel_complexidade: string | null
          numero_entrega: string | null
          numero_venda: string[]
          observacoes_internas: string | null
          order_in_route: number | null
          responsavel_recebimento: string
          scheduled_time: string | null
          separacoes_parciais: string[] | null
          solicitante: string | null
          status: string
          telefone: string | null
          tipo_entrega: string | null
          tipo_pedido: string
          transportadora_nome: string | null
          updated_at: string
        }
        Insert: {
          cliente: string
          codigo_obra: string
          codigo_rastreamento?: string | null
          created_at?: string
          data_entrega: string
          data_inicio_separacao?: string | null
          delivery_type?: string
          endereco: string
          garantia_detalhes?: string | null
          garantia_motivo?: string | null
          garantia_peca?: string | null
          gestora_equipe: string
          id?: string
          inclui_garantia?: boolean
          material_conteudo: string
          material_tipo?: string | null
          nivel_complexidade?: string | null
          numero_entrega?: string | null
          numero_venda?: string[]
          observacoes_internas?: string | null
          order_in_route?: number | null
          responsavel_recebimento: string
          scheduled_time?: string | null
          separacoes_parciais?: string[] | null
          solicitante?: string | null
          status?: string
          telefone?: string | null
          tipo_entrega?: string | null
          tipo_pedido?: string
          transportadora_nome?: string | null
          updated_at?: string
        }
        Update: {
          cliente?: string
          codigo_obra?: string
          codigo_rastreamento?: string | null
          created_at?: string
          data_entrega?: string
          data_inicio_separacao?: string | null
          delivery_type?: string
          endereco?: string
          garantia_detalhes?: string | null
          garantia_motivo?: string | null
          garantia_peca?: string | null
          gestora_equipe?: string
          id?: string
          inclui_garantia?: boolean
          material_conteudo?: string
          material_tipo?: string | null
          nivel_complexidade?: string | null
          numero_entrega?: string | null
          numero_venda?: string[]
          observacoes_internas?: string | null
          order_in_route?: number | null
          responsavel_recebimento?: string
          scheduled_time?: string | null
          separacoes_parciais?: string[] | null
          solicitante?: string | null
          status?: string
          telefone?: string | null
          tipo_entrega?: string | null
          tipo_pedido?: string
          transportadora_nome?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          email: string
          id: string
          nome_completo: string | null
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          nome_completo?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          nome_completo?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'whatsapp_instances_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'auth_users_view'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_authenticated: { Args: never; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "user" | "entregador"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user", "entregador"],
    },
  },
} as const

// ====== DATABASE EXTENDED CONTEXT (auto-generated) ======
// This section contains actual PostgreSQL column types, constraints, RLS policies,
// functions, triggers, indexes and materialized views not present in the type definitions above.
// IMPORTANT: The TypeScript types above map UUID, TEXT, VARCHAR all to "string".
// Use the COLUMN TYPES section below to know the real PostgreSQL type for each column.
// Always use the correct PostgreSQL type when writing SQL migrations.

// --- COLUMN TYPES (actual PostgreSQL types) ---
// Use this to know the real database type when writing migrations.
// "string" in TypeScript types above may be uuid, text, varchar, timestamptz, etc.
// Table: auth_users_view
//   id: uuid (nullable)
//   email: character varying (nullable)
// Table: dispatch_logs
//   id: uuid (not null, default: gen_random_uuid())
//   dispatch_id: uuid (not null)
//   contact_index: integer (nullable)
//   contact_name: text (nullable)
//   contact_phone: text (nullable)
//   status: text (not null)
//   error_message: text (nullable)
//   sent_at: timestamp with time zone (nullable, default: now())
//   message_id: text (nullable)
//   delivery_status: text (nullable, default: 'sent'::text)
//   delivered_at: timestamp with time zone (nullable)
//   read_at: timestamp with time zone (nullable)
// Table: dispatches
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   source_type: text (not null)
//   source_url: text (nullable)
//   source_filename: text (nullable)
//   template: text (not null)
//   status: text (not null, default: 'running'::text)
//   total_contacts: integer (nullable, default: 0)
//   sent_count: integer (nullable, default: 0)
//   error_count: integer (nullable, default: 0)
//   lot_config: jsonb (nullable)
//   started_at: timestamp with time zone (nullable, default: now())
//   finished_at: timestamp with time zone (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   last_sent_index: integer (nullable, default: 0)
//   contacts_json: jsonb (nullable)
//   is_multi_instance: boolean (nullable, default: false)
//   instance_distribution: jsonb (nullable)
//   approved_variations: jsonb (nullable, default: '[]'::jsonb)
// Table: hubspot_contacts
//   id: uuid (not null, default: gen_random_uuid())
//   hubspot_id: text (nullable)
//   user_id: uuid (nullable)
//   nome: text (nullable)
//   primeiro_nome: text (nullable)
//   telefone: text (nullable)
//   email: text (nullable)
//   etapa_negocio: text (nullable)
//   produto: text (nullable)
//   numero_consultoria: text (nullable)
//   data_reuniao_1: timestamp with time zone (nullable)
//   data_reuniao_2: timestamp with time zone (nullable)
//   data_reuniao_3: timestamp with time zone (nullable)
//   csat_reuniao_1: text (nullable)
//   csat_reuniao_2: text (nullable)
//   csat_reuniao_3: text (nullable)
//   data_etapa_atual: timestamp with time zone (nullable)
//   raw_payload: jsonb (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
// Table: owner_mapping
//   id: uuid (not null, default: gen_random_uuid())
//   hubspot_owner_id: text (not null)
//   adapta_email: text (not null)
//   nome: text (nullable)
//   role: text (not null, default: 'elite'::text)
//   adapta_user_id: uuid (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
// Table: scheduled_dispatches
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   scheduled_at: timestamp with time zone (not null)
//   status: text (nullable, default: 'pending'::text)
//   dispatch_type: text (nullable, default: 'bulk'::text)
//   contacts_json: jsonb (not null)
//   template: text (not null)
//   lot_config: jsonb (nullable)
//   dispatch_id: uuid (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
// Table: user_credentials
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   evolution_api_url: text (nullable)
//   evolution_api_key: text (nullable)
//   instance_name: text (nullable)
//   google_credentials: jsonb (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
// Table: whatsapp_instances
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (not null)
//   provider: text (not null, default: 'evolution'::text)
//   display_name: text (nullable)
//   api_url: text (not null)
//   api_key: text (not null)
//   instance_name: text (not null)
//   phone_number: text (nullable)
//   status: text (not null, default: 'disconnected'::text)
//   is_active: boolean (not null, default: true)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
//   webhook_configured: boolean (nullable, default: false)

// --- CONSTRAINTS ---
// Table: dispatch_logs
//   FOREIGN KEY dispatch_logs_dispatch_id_fkey: FOREIGN KEY (dispatch_id) REFERENCES dispatches(id) ON DELETE CASCADE
//   PRIMARY KEY dispatch_logs_pkey: PRIMARY KEY (id)
//   CHECK dispatch_logs_status_check: CHECK ((status = ANY (ARRAY['success'::text, 'error'::text])))
// Table: dispatches
//   PRIMARY KEY dispatches_pkey: PRIMARY KEY (id)
//   CHECK dispatches_source_type_check: CHECK ((source_type = ANY (ARRAY['sheets'::text, 'csv'::text])))
//   CHECK dispatches_status_check: CHECK ((status = ANY (ARRAY['running'::text, 'completed'::text, 'error'::text])))
//   FOREIGN KEY dispatches_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
// Table: hubspot_contacts
//   UNIQUE hubspot_contacts_hubspot_id_key: UNIQUE (hubspot_id)
//   PRIMARY KEY hubspot_contacts_pkey: PRIMARY KEY (id)
//   FOREIGN KEY hubspot_contacts_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL
// Table: owner_mapping
//   UNIQUE owner_mapping_hubspot_owner_id_key: UNIQUE (hubspot_owner_id)
//   PRIMARY KEY owner_mapping_pkey: PRIMARY KEY (id)
// Table: scheduled_dispatches
//   PRIMARY KEY scheduled_dispatches_pkey: PRIMARY KEY (id)
// Table: user_credentials
//   PRIMARY KEY user_credentials_pkey: PRIMARY KEY (id)
//   FOREIGN KEY user_credentials_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
//   UNIQUE user_credentials_user_id_key: UNIQUE (user_id)
// Table: whatsapp_instances
//   PRIMARY KEY whatsapp_instances_pkey: PRIMARY KEY (id)
//   FOREIGN KEY whatsapp_instances_user_id_fkey: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE

// --- ROW LEVEL SECURITY POLICIES ---
// Table: dispatch_logs
//   Policy "Users can insert own dispatch logs" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (EXISTS ( SELECT 1    FROM dispatches d   WHERE ((d.id = dispatch_logs.dispatch_id) AND (d.user_id = ( SELECT auth.uid() AS uid)))))
//   Policy "Users can view own dispatch logs" (SELECT, PERMISSIVE) roles={public}
//     USING: (EXISTS ( SELECT 1    FROM dispatches d   WHERE ((d.id = dispatch_logs.dispatch_id) AND (d.user_id = ( SELECT auth.uid() AS uid)))))
// Table: dispatches
//   Policy "Users can insert own dispatches" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (( SELECT auth.uid() AS uid) = user_id)
//   Policy "Users can update own dispatches" (UPDATE, PERMISSIVE) roles={public}
//     USING: (( SELECT auth.uid() AS uid) = user_id)
//   Policy "Users can view own dispatches" (SELECT, PERMISSIVE) roles={public}
//     USING: (( SELECT auth.uid() AS uid) = user_id)
// Table: hubspot_contacts
//   Policy "Users can view own hubspot contacts" (SELECT, PERMISSIVE) roles={public}
//     USING: (( SELECT auth.uid() AS uid) = user_id)
// Table: owner_mapping
//   Policy "Authenticated users can read owner mapping" (SELECT, PERMISSIVE) roles={authenticated}
//     USING: true
// Table: scheduled_dispatches
//   Policy "Users manage own scheduled dispatches" (ALL, PERMISSIVE) roles={public}
//     USING: (( SELECT auth.uid() AS uid) = user_id)
//     WITH CHECK: (( SELECT auth.uid() AS uid) = user_id)
// Table: user_credentials
//   Policy "Users can insert own credentials" (INSERT, PERMISSIVE) roles={public}
//     WITH CHECK: (( SELECT auth.uid() AS uid) = user_id)
//   Policy "Users can update own credentials" (UPDATE, PERMISSIVE) roles={public}
//     USING: (( SELECT auth.uid() AS uid) = user_id)
//   Policy "Users can view own credentials" (SELECT, PERMISSIVE) roles={public}
//     USING: (( SELECT auth.uid() AS uid) = user_id)
// Table: whatsapp_instances
//   Policy "Users manage own instances" (ALL, PERMISSIVE) roles={public}
//     USING: (( SELECT auth.uid() AS uid) = user_id)
//     WITH CHECK: (( SELECT auth.uid() AS uid) = user_id)

// --- INDEXES ---
// Table: dispatch_logs
//   CREATE INDEX idx_dispatch_logs_dispatch_delivery ON public.dispatch_logs USING btree (dispatch_id, delivery_status)
//   CREATE INDEX idx_dispatch_logs_message_id ON public.dispatch_logs USING btree (message_id) WHERE (message_id IS NOT NULL)
// Table: dispatches
//   CREATE INDEX idx_dispatches_user_id ON public.dispatches USING btree (user_id)
// Table: hubspot_contacts
//   CREATE UNIQUE INDEX hubspot_contacts_hubspot_id_key ON public.hubspot_contacts USING btree (hubspot_id)
//   CREATE INDEX idx_hubspot_contacts_etapa ON public.hubspot_contacts USING btree (etapa_negocio)
//   CREATE INDEX idx_hubspot_contacts_produto ON public.hubspot_contacts USING btree (produto)
//   CREATE INDEX idx_hubspot_contacts_user_id ON public.hubspot_contacts USING btree (user_id)
// Table: owner_mapping
//   CREATE UNIQUE INDEX owner_mapping_hubspot_owner_id_key ON public.owner_mapping USING btree (hubspot_owner_id)
// Table: scheduled_dispatches
//   CREATE INDEX idx_scheduled_dispatches_scheduled_at ON public.scheduled_dispatches USING btree (scheduled_at)
//   CREATE INDEX idx_scheduled_dispatches_status ON public.scheduled_dispatches USING btree (status)
// Table: user_credentials
//   CREATE UNIQUE INDEX user_credentials_user_id_key ON public.user_credentials USING btree (user_id)
// Table: whatsapp_instances
//   CREATE INDEX idx_whatsapp_instances_user ON public.whatsapp_instances USING btree (user_id)
